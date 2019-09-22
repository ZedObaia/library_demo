from rest_framework import permissions, authentication, status, generics
from rest_framework.response import Response
from .serializers import ReviewReadSerializer, ReviewWriteSerializer
from reviews.models import Review
from reviews.api.mixins import IsMyReviewOrReadOnly

class ReviewDetailUpdateDelete(IsMyReviewOrReadOnly, generics.RetrieveUpdateDestroyAPIView):
    """
        Review Detail/Update/Delete
        GET : Returns Current review details
        PUT/PATCH : Updates current Review
        DELETE : Deletes current Review
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [authentication.SessionAuthentication]

    def get_serializer_class(self, *args, **kwargs):
        if self.request.method == 'GET':
            return ReviewReadSerializer
        else:
            return ReviewWriteSerializer
    queryset = Review.objects.all()
