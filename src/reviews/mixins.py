from django.shortcuts import Http404
class MyReviewMixin(object):
    def dispatch(self, *args, **kwargs):
        if self.request.user == self.get_object().user:
            return super(MyReviewMixin, self).dispatch(*args, **kwargs)
        raise Http404