from django.urls import path, include
from accounts.views import UserDetailAPIView
urlpatterns = [
    path('books/', include('books.api.urls')),
    path('me/', UserDetailAPIView.as_view()),
    path('reviews/', include('reviews.api.urls'))
]
