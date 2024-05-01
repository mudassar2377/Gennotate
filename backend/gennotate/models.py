from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField

# Create your models here.
class GeneratedImage(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE)
    link = CloudinaryField('image')
    type = models.IntegerField(default=0)
    generated = models.IntegerField(default=1)
    annotations = models.TextField(max_length=1000, default="")
    def __str__(self):
        return f"Generated Image # {self.id} >> {self.userId}"
class SegmentedImage(models.Model):
    id = models.AutoField(primary_key=True)
    userId = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    generatedImageId = models.ForeignKey(GeneratedImage, on_delete=models.CASCADE)
    link = CloudinaryField('image')
    type = models.IntegerField(default=0)
    annotations = models.TextField(max_length=1000, default="")
    def __str__(self):
        return f"Segmented Image # {self.id} >> {self.generatedImageId}"