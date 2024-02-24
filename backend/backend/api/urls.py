from rest_framework.routers import DefaultRouter
from gennotate.api.urls import user_router, generated_image_router, segmented_image_router
from django.urls import path, include
router = DefaultRouter()
router.registry.extend(user_router.registry)
router.registry.extend(generated_image_router.registry)
router.registry.extend(segmented_image_router.registry)
urlpatterns = [
    path('', include(router.urls))
]