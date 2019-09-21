
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
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    parser_classes = (MultiPartParser, )

    def get_serializer_class(self, *args, **kwargs):
        if self.request.method == 'GET':
            return BookReadSerializer
        else:
            return BookWriteSerializer

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
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()


class CategoryDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

# Author CRUD


class AuthorListCreate(generics.ListCreateAPIView):
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()


class AuthorDetailUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsStaffOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()

# Book reviews


class BookReviewListCreate(generics.ListCreateAPIView):
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
        s = serializer.save(user=self.request.user, book=book)
