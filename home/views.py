from django.shortcuts import render, redirect
from django.shortcuts import render, get_object_or_404
from .models import Blog, Team


# Create your views here.
def home(request):
    context = {

    }
    return render(request, 'index.html', context)


def about(request):
    teams = Team.objects.all()
    data = Blog.objects.all().order_by('-id')
    context = {
        'teams': teams,
        'data': data,
    }
    return render(request, 'about.html', context)




def team_list(request):
    teams = Team.objects.all()
    return render(request, 'team/team_list.html', {'teams': teams})

def team_detail(request, slug):
    team = get_object_or_404(Team, slug=slug)
    return render(request, 'team/team_detail.html', {'team': team})



def blog(request):
    data = Blog.objects.all().order_by('-id')
    context = {
        'data':data,
    }
    return render(request, 'blog/blogs.html', context)

def blog_detail(request, pk):
    data = Blog.objects.get(slug=pk)
    data2 = Blog.objects.all().order_by('-id')[:7]
    context = {
        'data':data,
        'data2':data2,
    }
    return render(request, 'blog/blog_detail.html', context)


