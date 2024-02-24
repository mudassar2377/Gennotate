from django.contrib import admin
from django.urls import path, include, re_path
from gennotate import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.api.urls')),
    re_path('api/signup/', views.signup, name='signup'),
    re_path('api/login/', views.login, name='login'),
    re_path('api/test_token/', views.test_token, name='taken_token'),
]