from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, GeneratedImageViewSet, SegmentedImageViewSet, TestModelViewSet

user_router = DefaultRouter()
user_router.register(r'users', UserViewSet)
generated_image_router = DefaultRouter()
generated_image_router.register(r'generated_images', GeneratedImageViewSet)
segmented_image_router = DefaultRouter()
segmented_image_router.register(r'segmented_images', SegmentedImageViewSet)
test_model_router = DefaultRouter()
test_model_router.register(r'test_model', TestModelViewSet)