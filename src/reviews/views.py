from django.views import generic
from .models import Review
from .mixins import MyReviewMixin
class DeleteReview(MyReviewMixin, generic.DeleteView):
    model = Review
    def get_success_url(self, *args, **kwargs):
        book = self.get_object().book
        success_url = book.get_absolute_url()
        return success_url