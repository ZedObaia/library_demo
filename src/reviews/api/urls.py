from django.urls import path
from . import views

urlpatterns = [
    path('<int:pk>/', views.ReviewDetailUpdateDelete.as_view(), name='review_detail_update_api')
]
