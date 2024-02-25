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
@api_view(['POST'])
def generateImages(request):
    if request.method == 'POST':
        userId = request.data.get('userId')
        user_instance = User.objects.get(id=userId)
        type = request.data.get('type')
        num = int(request.data.get('num'))
        for _ in range (num):
            your_numpy_array = np.zeros((300, 300, 3)).astype('uint8')
            if type == "Normal":
                your_numpy_array[:, :, 0] = 255
            elif type == "CNV":
                your_numpy_array[0:50, :, 1] = 255
                your_numpy_array[100:150, :, 1] = 255
                your_numpy_array[200:250, :, 1] = 255
            else:
                your_numpy_array[0:200, :, 0] = 255
            img = Image.fromarray(your_numpy_array.astype('uint8'))
            img_bytes = BytesIO()
            img.save(img_bytes, format='PNG')
            img_bytes = img_bytes.getvalue()
            cloudinary_response = cloudinary.uploader.upload(img_bytes)
            cloudinary_url = cloudinary_response.get("url")
            generated_image_instance = GeneratedImage(userId=user_instance, link=cloudinary_url, type=type)
            generated_image_instance.save()
        return Response({"message": "Data added to the database"}, status=status.HTTP_201_CREATED)
    return Response({"message": "Hello, world!!!"})
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