from ..models import Book, Category, Author
from rest_framework import serializers


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'


class BookReadSerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    authors = AuthorSerializer(many=True)

    class Meta:
        model = Book
        fields = '__all__'


class BookWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        exclude = ['read_book', 'reviews']