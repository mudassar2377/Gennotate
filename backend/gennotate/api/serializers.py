from rest_framework.serializers import ModelSerializer
from ..models import GeneratedImage, SegmentedImage
from django.contrib.auth.models import User
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'password', 'last_login', 'date_joined']
class GeneratedImageSerializer(ModelSerializer):
    class Meta:
        model = GeneratedImage
        fields = ['id', 'userId', 'link', 'type', 'addToGallery', 'annotations']
class SegmentedImageSerializer(ModelSerializer):
    class Meta:
        model = SegmentedImage
        fields = ['id', 'generatedImageId', 'link', 'annotations']