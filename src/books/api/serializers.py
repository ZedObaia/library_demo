from ..models import Book, Category, Author
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    """
        Category Serializer
        Author : Zeyad Obaia
    """
    class Meta:
        model = Category
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    """
        Author Serializer
        Author : Zeyad Obaia
    """    
    class Meta:
        model = Author
        fields = '__all__'


class BookReadSerializer(serializers.ModelSerializer):
    """
        Book Read Serializer
        used with GET requests, using nested serializers for ease of use with the frontend
        Author : Zeyad Obaia
    """
    category = CategorySerializer()
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'


class BookWriteSerializer(serializers.ModelSerializer):
    """
        Book Write Serializer
        used with POST, PUT and PATCH requests, without using nested serializers
        Author : Zeyad Obaia
    """
    class Meta:
        model = Book
        exclude = ['read_book', 'reviews']