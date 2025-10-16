
from django.urls import path
from . import views
app_name='home'
urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('team/', views.team_list, name='team_list'),
    path('team/<slug:slug>/', views.team_detail, name='team_detail'),
    path('blogs/', views.blog, name='blog'),
    path('blogs/<str:pk>/', views.blog_detail, name='blog_detail'),
]