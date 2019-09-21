from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _
User = get_user_model()

class Review(models.Model):
    text = models.TextField(verbose_name=_('Book Review'))
    book = models.ForeignKey('books.Book', on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return str(self.id)
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['book' , 'user'], name='one_review_per_book_per_user')
        ]
