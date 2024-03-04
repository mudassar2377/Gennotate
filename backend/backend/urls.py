from django.contrib import admin
from django.urls import path, include, re_path
from gennotate import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.api.urls')),
    re_path('api/signup/', views.signup, name='signup'),
    re_path('api/login/', views.login, name='login'),
    path('generateImages/', views.generateImages, name='generateImages'),
    path('getGeneratedImages/', views.getGeneratedImages, name='getGeneratedImages')
]