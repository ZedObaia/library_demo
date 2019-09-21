from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth import get_user_model
from django.urls import reverse
User = get_user_model()


class Category(models.Model):
    name = models.CharField(max_length=255, verbose_name=_('Category Name'))
    description = models.TextField(
        null=True, blank=True, verbose_name=_('Category Description'))

    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=255, verbose_name=_('Book Title'))
    description = models.TextField(
        null=True, blank=True, verbose_name=_('Book Description'))
    cover = models.ImageField(null=True, blank=True,
                              verbose_name=_("Book Cover"))
    publication_date = models.DateField(verbose_name=_('Publication Date'))

    # relations
    category = models.ForeignKey('Category', on_delete=models.CASCADE)
    authors = models.ManyToManyField('Author', related_name='books')
    read_book = models.ManyToManyField(User, related_name='my_books')
    reviews = models.ManyToManyField(
        User, through='reviews.Review', related_name='my_reviews')
    # Meta

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("books:book_detail", kwargs={"pk": self.pk})
    

class Author(models.Model):
    first_name = models.CharField(
        max_length=255, verbose_name=_('Author First Name'))
    last_name = models.CharField(
        max_length=255, verbose_name=_('Author Last Name'))
    bio = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name
    