from django.urls import path, include

import blog.views as views


urlpatterns = [
    path('', views.home, name='home'),
    path('download_resume/', views.download_resume, name='download_resume'),
]
