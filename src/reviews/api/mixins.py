from rest_framework.response import Response
from django.shortcuts import Http404
SAFE_METHODS = ('GET', 'HEAD', 'OPTIONS')

# Make sure only the owener of the review can update/delete it
class IsMyReviewOrReadOnly(object):

    def dispatch(self, *args, **kwargs):
        if self.get_object().user == self.request.user:
            return super(IsMyReviewOrReadOnly, self).dispatch(*args, **kwargs)
        raise Http404