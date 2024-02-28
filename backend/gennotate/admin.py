from django.contrib import admin
from .models import GeneratedImage, SegmentedImage
# Register your models here.
admin.site.register(GeneratedImage)
admin.site.register(SegmentedImage)