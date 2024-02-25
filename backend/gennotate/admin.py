from django.contrib import admin
from .models import GeneratedImage, SegmentedImage, TestModel
# Register your models here.
admin.site.register(GeneratedImage)
admin.site.register(SegmentedImage)
admin.site.register(TestModel)