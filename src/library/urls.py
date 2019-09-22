"""library URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from django.views.generic import RedirectView, TemplateView
from accounts import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('t/books/', include(('books.urls', 'books'), namespace='books')),
    path('t/reviews/', include(('reviews.urls', 'reviews'), namespace='reviews')),

    path('oauth/', include('social_django.urls', namespace='social')),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(),
         {'next_page': 'login'}, name='logout'),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('account_activation_sent/', views.AccountActicationSent.as_view(),
         name='account_activation_sent'),
    
    re_path(r'^activate/(?P<uidb64>[0-9A-Za-z_\-]+)/(?P<token>[0-9A-Za-z]{1,13}-[0-9A-Za-z]{1,20})/$',
            views.activate, name='activate'),

    path('api/', include(('library.api_urls', 'api'), namespace='api')),
    re_path(r'^favicon\.ico$', RedirectView.as_view(url='/static/logo.png')),

]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(r'(?P<path>.*)', TemplateView.as_view(template_name="index.html"), name="app",)
]
