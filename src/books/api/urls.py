from . import views
from django.urls import path

urlpatterns = [
    # book urls
    path('', views.BookListCreate.as_view(), name="book_list_create_api"),
    path('<int:pk>/', views.BookDetailUpdateDelete.as_view(), name="book_detail_update_api"),
    path('<int:pk>/reviews/', views.BookReviewListCreate.as_view(), name="book_reviews_list_create_api"),
    path('<int:pk>/read/', views.BookToggleRead.as_view(), name="book_toggle_read_status"),
    # category urls
    path('category/', views.CategoryListCreate.as_view(), name="category_list_create_api"),
    path('category/<int:pk>/', views.CategoryDetailUpdateDelete.as_view(), name="category_detail_update_api"),
    # author urls
    path('author/', views.AuthorListCreate.as_view(), name="author_list_create_api"),
    path('author/<int:pk>/', views.AuthorDetailUpdateDelete.as_view(), name="author_detail_update_api"),

]
