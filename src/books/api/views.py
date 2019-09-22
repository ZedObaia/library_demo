
from django.shortcuts import get_object_or_404
from rest_framework import authentication, generics, permissions, status
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response

from accounts.permissions import IsStaffOrReadOnly
from books.api.serializers import (AuthorSerializer, BookReadSerializer,
                                   BookWriteSerializer, CategorySerializer)
from books.models import Author, Book, Category
from reviews.api.serializers import ReviewReadSerializer, ReviewWriteSerializer
from reviews.models import Review
import json

# Book CRUD


class BookListCreate(generics.ListCreateAPIView):
    """
        Book List/Create API View
        Author : Zeyad Obaia
        GET : returns a list of books as JSON
        POST {} : creates a new book
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    parser_classes = (MultiPartParser, )

    # use the suitable serializer based on the request method
    def get_serializer_class(self, *args, **kwargs):
        if self.request.method == 'GET':
            return BookReadSerializer
        else:
            return BookWriteSerializer

    # only return the read books if the 'mine' filter is applied
    def get_queryset(self, *args, **kwargs):
        if self.request.GET.get('mine') == 'true' and self.request.user.is_authenticated:
            return self.request.user.my_books.all()
        return Book.objects.all()

    def post(self, *args, **kwargs):
        # handle form data sends image & array stringified
        serializer = self.get_serializer_class()
        data = self.request.data.copy().dict()
        data['authors'] = json.loads(data.get('authors'))
        s = serializer(data=data)
        if s.is_valid():
            s.save()
        else:
            return Response(s.errors)
        return Response(s.data)


class BookDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
        Book Detail/Update/Delete API View
        Author : Zeyad Obaia
        GET : returns current book details
        PUT/PATCH : Updates current Book
        Delete : Deletes Current Book
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]

    def get_serializer_class(self, *args, **kwargs):
        if self.request.method == 'GET':
            return BookReadSerializer
        else:
            return BookWriteSerializer

    queryset = Book.objects.all()

    def update(self, *args, **kwargs):
        # handle form data sends image & array stringified
        serializer = self.get_serializer_class()
        data = self.request.data.copy().dict()
        data['authors'] = json.loads(data.get('authors'))
        s = serializer(self.get_object(), data=data)
        if s.is_valid():
            s.save()
        else:
            return Response(s.errors)
        return Response(s.data)

# Category CRUD


class CategoryListCreate(generics.ListCreateAPIView):
    """
        Category List/Create API View
        GET : Returns list of categories as JSON
        POST {} : Creates new category
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
        Category Detail/Update/Delete API View
        GET : Returns current category details as JSON
        PUT/PATCH : Updates current category
        DELETE : deletes current category
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

# Author CRUD


class AuthorListCreate(generics.ListCreateAPIView):
    """
        Author List/Create API View
        GET : Returns list of authors as JSON
        POST {} : Creates new author
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class AuthorDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    """
        Author Detail/Update/Delete API View
        GET : Returns current author details as JSON
        PUT/PATCH : Updates current author
        DELETE : deletes current author
    """
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

# Book reviews


class BookReviewListCreate(generics.ListCreateAPIView):
    """
        Book Review List/Create API View
        GET : returns list of reviews for the current book
        POST : creates new review for the current book and current user
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]

    def get_serializer_class(self, *args, **kwargs):
        if self.request.method == 'GET':
            serializer_class = ReviewReadSerializer
        else:
            serializer_class = ReviewWriteSerializer
        return serializer_class

    def get_queryset(self, *args, **kwargs):
        book_id = self.kwargs.get('pk')
        return Review.objects.filter(book=book_id)

    def perform_create(self, serializer):
        book_id = self.kwargs.get('pk')
        book = get_object_or_404(Book, pk=book_id)
        # save the current user and book on the review instance
        s = serializer.save(user=self.request.user, book=book)


class BookToggleRead(generics.views.APIView):
    """
        Toogle book read status for the current user
        Author : Zeyad Obaia
    """
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]

    def post(self, *args, **kwargs):
        book_id = self.kwargs.get('pk')
        book = get_object_or_404(Book, pk=book_id)

        qs = self.request.user.my_books.filter(id=book_id)
        if qs.exists():
            self.request.user.my_books.remove(book)
        else:
            self.request.user.my_books.add(book)
        return BookReadSerializer(book)
