from django.contrib import admin
from django.urls import path, include, re_path
from gennotate import views
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, World!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.api.urls')),
    re_path('api/signup/', views.signup, name='signup'),
    re_path('api/login/', views.login, name='login'),
    # path('generateImages/', views.generateImages, name='generateImages'),
    path('getGeneratedImages/', views.getGeneratedImages, name='getGeneratedImages'),
    # path('segmentedImages/', views.segmentedImages, name='segmentedImages'),
    path('getSegmentedImages/', views.getSegmentedImages, name='getSegmentedImages'),
    path('cleanImages/', views.createImages, name='cleanImages'),
    path('generateImages/', views.generateImages, name='generateImages'),
    path('segmentImages/', views.segmentImages, name='segmentImages'),
    path('', hello_world, name='hello_world'),
]