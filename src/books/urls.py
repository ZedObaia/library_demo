from django.urls import path
from . import views

urlpatterns = [
    path('', views.BookList.as_view(), name='book_list'),
    path('add/', views.BookCreate.as_view(), name='book_add'),
    path('<int:pk>/', views.BookDetail.as_view(), name='book_detail'),
    path('<int:pk>/edit/', views.BookUpdate.as_view(), name='book_update'),
    path('<int:pk>/read/', views.BookToggleRead.as_view(), name='toggle_read'),

    path('<int:pk>/delete/', views.BookDelete.as_view(), name='book_delete'),


    path('category/', views.CategoryList.as_view(), name='category_list'),
    path('category/add/', views.CategoryCreate.as_view(), name='category_add'),
    path('category/<int:pk>/', views.CategoryDetail.as_view(), name='category_detail'),
    path('category/<int:pk>/edit/', views.CategoryUpdate.as_view(), name='category_update'),
    path('category/<int:pk>/delete/', views.CategoryDelete.as_view(), name='category_delete'),

    path('author/', views.AuthorList.as_view(), name='author_list'),
    path('author/add/', views.AuthorCreate.as_view(), name='author_add'),
    path('author/<int:pk>/', views.AuthorDetail.as_view(), name='author_detail'),
    path('author/<int:pk>/edit/', views.AuthorUpdate.as_view(), name='author_update'),
    path('author/<int:pk>/delete/', views.AuthorDelete.as_view(), name='author_delete'),



]
