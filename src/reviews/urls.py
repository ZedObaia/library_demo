from . import views
from django.urls import path

urlpatterns = [
    path('<int:pk>/delete/', views.DeleteReview.as_view(), name='review_delete')    
]
