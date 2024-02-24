from rest_framework.viewsets import ModelViewSet
from ..models import GeneratedImage, SegmentedImage
from django.contrib.auth.models import User
from .serializers import UserSerializer, GeneratedImageSerializer, SegmentedImageSerializer

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
class GeneratedImageViewSet(ModelViewSet):
    queryset = GeneratedImage.objects.all()
    serializer_class = GeneratedImageSerializer
class SegmentedImageViewSet(ModelViewSet):
    queryset = SegmentedImage.objects.all()
    serializer_class = SegmentedImageSerializer