from reviews.models import Review
from rest_framework import serializers
from accounts.api.serializers import UserSerializer
from books.api.serializers import BookWriteSerializer


class ReviewReadSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    book = BookWriteSerializer()

    class Meta:
        model = Review
        fields = '__all__'


class ReviewWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['text']

    def create(self, validated_data):
        # make sure there's only one reviews for each user
        review_exists = Review.objects.filter(user=validated_data.get(
            'user'), book=validated_data.get('book')).exists()
        if review_exists:
            raise serializers.ValidationError(
                'You already added a review for this book !')
        return super(ReviewWriteSerializer, self).create(validated_data)
