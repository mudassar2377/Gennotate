from rest_framework.decorators import api_view
from rest_framework.response import Response
from .api.serializers import UserSerializer, GeneratedImageSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from PIL import Image
from .models import GeneratedImage
import numpy as np
import cloudinary.uploader
from io import BytesIO
import torch
import torchvision
import math
import os
from labml_nn.gan.stylegan import Generator, MappingNetwork
# modell = joblib.load('./savedModels/model1.joblib')
@api_view(['POST'])
def login(request):
    user = get_object_or_404(User, username=request.data['username'])
    if not user.check_password(request.data['password']):
        return Response("missing user")
    token, _ = Token.objects.get_or_create(user=user)
    serializer = UserSerializer(user)
    return Response({'token': token.key, 'user': serializer.data})
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token': token.key, 'user': serializer.data})
    return Response(serializer.errors, status=status.HTTP_200_OK)
@api_view(['GET'])
@authentication_classes([SessionAuthentication, TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):
    return Response(request.user.username)
@api_view(['GET'])
def getGeneratedImages(request):
    if request.method == 'GET':
        userId = request.query_params.get('userId')
        if userId is not None:
            try:
                user_instance = User.objects.get(id=userId)
                generated_images = GeneratedImage.objects.filter(userId=user_instance)
                serialized_data = GeneratedImageSerializer(generated_images, many=True).data
                return Response({"generated_images": serialized_data}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"message": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({"message": "userId parameter is missing"}, status=status.HTTP_400_BAD_REQUEST)
    return Response({"message": "Hello, world!!!"})
#===================================================================================================
def get_w(log_resolution, d_latent, device, mapping_network, batch_size: int):
        style_mixing_prob: float = 0.9
        n_features: int = 32 
        max_features: int = 512
        features = [min(max_features, n_features * (2 ** i)) for i in range(log_resolution - 2, -1, -1)]
        n_blocks = len(features)
        n_gen_blocks = n_blocks
        if torch.rand(()).item() < style_mixing_prob:
            cross_over_point = int(torch.rand(()).item() * n_gen_blocks)
            z2 = torch.randn(batch_size, d_latent).to(device)
            z1 = torch.randn(batch_size, d_latent).to(device)
            w1 = mapping_network(z1)
            w2 = mapping_network(z2)
            w1 = w1[None, :, :].expand(cross_over_point, -1, -1)
            w2 = w2[None, :, :].expand(n_gen_blocks - cross_over_point, -1, -1)
            return torch.cat((w1, w2), dim=0)
        else:
            z = torch.randn(batch_size, d_latent).to(device)
            w = mapping_network(z)
            return w[None, :, :].expand(n_gen_blocks, -1, -1)
def get_noise(log_resolution, device, batch_size: int):
        noise = []
        resolution = 4
        n_features: int = 32 
        max_features: int = 512
        features = [min(max_features, n_features * (2 ** i)) for i in range(log_resolution - 2, -1, -1)]
        n_blocks = len(features)
        n_gen_blocks = n_blocks
        for i in range(n_gen_blocks):
            if i == 0:
                n1 = None
            else:
                n1 = torch.randn(batch_size, 1, resolution, resolution, device=device)
            n2 = torch.randn(batch_size, 1, resolution, resolution, device=device)
            noise.append((n1, n2))
            resolution *= 2
        return noise
def generate_images(generator, log_resolution, d_latent, device, mapping_network, batch_size: int):
        w = get_w(batch_size=batch_size, log_resolution=log_resolution, d_latent=d_latent, device=device, mapping_network=mapping_network)
        noise = get_noise(batch_size=batch_size, log_resolution=log_resolution, device=device)
        images = generator(w, noise)
        return images, w
@api_view(['POST'])
def generateImages(request):
    if request.method == 'POST':
        Generator_path = './savedModels/generator.pth'
        Mapping_network_path = './savedModels/mapping_network.pth'
        d_latent: int = 512
        image_size = 256
        mapping_network_layers: int = 8
        log_resolution = int(math.log2(image_size))
        if torch.cuda.is_available():
            device = torch.device("cuda")
            print("GPU is available. Using GPU.")
        else:  
            device = torch.device("cpu")
            print("GPU is not available. Using CPU.")
        generator = Generator(log_resolution=log_resolution ,d_latent=d_latent).to(device)
        generator.load_state_dict(torch.load(Generator_path,map_location=device))
        generator.eval()
        mapping_network = MappingNetwork(d_latent,mapping_network_layers).to(device)
        mapping_network.load_state_dict(torch.load(Mapping_network_path,map_location=device))
        mapping_network.eval()
        userId = request.data.get('userId')
        user_instance = User.objects.get(id=userId)
        num = int(request.data.get('num'))
        total_images = num
        os.system('cls')
        for i in range(0,total_images):
            torch.cuda.empty_cache()
            batch_size = 1
            imgs, w = generate_images(generator, log_resolution, d_latent, device, mapping_network, batch_size)
            for r in range(batch_size):
                image = torchvision.transforms.ToPILImage()(imgs[r])
                img_bytes = BytesIO()
                image.save(img_bytes, format='PNG')
                img_bytes = img_bytes.getvalue()
                cloudinary_response = cloudinary.uploader.upload(img_bytes)
                cloudinary_url = cloudinary_response.get("url")
                generated_image_instance = GeneratedImage(userId=user_instance, link=cloudinary_url, type=type)
                generated_image_instance.save()
        return Response({"message": "Data added to the database"}, status=status.HTTP_201_CREATED)
    return Response({"message": "Nothing"}, status=status.HTTP_201_CREATED)