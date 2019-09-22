from django.shortcuts import Http404, redirect, render
from django.urls import reverse_lazy, reverse
from django.views import generic

from accounts.mixins import StaffRequiredMixin
from reviews.models import Review
from reviews.forms import ReviewForm

from .models import Author, Book, Category
from django.contrib import messages
from django.contrib.auth.mixins import LoginRequiredMixin
# Category Curd


class CategoryList(generic.ListView):
    """
        Category List
        Author : Zeyad Obaia
    """
    model = Category
    template_name = 'categories/category_list.html'


class CategoryDetail(generic.DetailView):
    """
        Category Detail
        Author : Zeyad Obaia
    """
    model = Category
    template_name = 'categories/category_detail.html'


class CategoryCreate(StaffRequiredMixin, generic.CreateView):
    """
        Category Create
        Author : Zeyad Obaia
    """
    model = Category
    fields = ['name', 'description']
    success_url = reverse_lazy('books:category_list')
    template_name = 'categories/category_form.html'


class CategoryUpdate(StaffRequiredMixin, generic.UpdateView):
    """
        Category Update
        Author : Zeyad Obaia
    """
    model = Category
    fields = ['name', 'description']
    success_url = reverse_lazy('books:category_list')
    template_name = 'categories/category_form.html'


class CategoryDelete(generic.DeleteView):
    """
        Category Delete
        Author : Zeyad Obaia
    """
    model = Category
    success_url = reverse_lazy('books:category_list')
    template_name = 'categories/category_confirm_delete.html'


# Author CRUD

class AuthorList(generic.ListView):
    """
        Author List
        Author : Zeyad Obaia
    """
    model = Author
    template_name = 'authors/author_list.html'


class AuthorDetail(generic.DetailView):
    """
        Author Detail
        Author : Zeyad Obaia
    """
    model = Author
    template_name = 'authors/author_detail.html'


class AuthorCreate(StaffRequiredMixin, generic.CreateView):
    """
        Author Create
        Author : Zeyad Obaia
    """
    model = Author
    fields = ['first_name', 'last_name', 'bio']
    success_url = reverse_lazy('books:author_list')
    template_name = 'authors/author_form.html'


class AuthorUpdate(StaffRequiredMixin, generic.UpdateView):
    """
        Author Update
        Author : Zeyad Obaia
    """
    model = Author
    fields = ['first_name', 'last_name', 'bio']
    success_url = reverse_lazy('books:author_list')
    template_name = 'authors/author_form.html'


class AuthorDelete(generic.DeleteView):
    """
        Author Delete
        Author : Zeyad Obaia
    """
    model = Author
    success_url = reverse_lazy('books:author_list')
    template_name = 'authors/author_confirm_delete.html'


# Book CRUD
class BookList(generic.ListView):
    """
        Book List
        Author : Zeyad Obaia
    """
    model = Book

    def get_queryset(self, *args, **kwargs):
        # Return all books if the 'mine' filter is not applied, else return the read books only
        qs = Book.objects.all()
        if self.request.user.is_authenticated and self.request.GET.get('mine') == "true":
            return self.request.user.my_books.all()
        return qs


class BookDetail(generic.DetailView):
    """
        Book Detail
        Author : Zeyad Obaia
    """
    model = Book

    def get_context_data(self, **kwargs):
        # return the user review if it exists, and return all other reviews
        context = super().get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            # my reviews for this book
            mine = Review.objects.filter(
                book=self.get_object(), user=self.request.user)
            # all other reviews
            others = Review.objects.filter(
                book=self.get_object()).exclude(user=self.request.user)
            context['reviews'] = others
            context['mine'] = mine.first()
            context['read_by_me'] = self.request.user.my_books.filter(
                id=self.get_object().id).exists()
        else:
            mine = None
            context['reviews'] = Review.objects.filter(
                book=self.get_object()).order_by('-timestamp')
            context['mine'] = mine

        # return add or edit review form in the context
        if mine:
            context["form"] = ReviewForm(instance=mine.first())
            context['newReview'] = False
        else:
            context["form"] = ReviewForm()
            context['newReview'] = True
        context['review_count'] = Review.objects.filter(
            book=self.get_object()).count()
        return context

    # add or update the user's review for the current book
    def post(self, *args, **kwargs):
        qs = Review.objects.filter(
            user=self.request.user, book=self.get_object())
        if not qs.exists():
            form = ReviewForm(self.request.POST)
            if form.is_valid():
                obj = form.save(commit=False)
                obj.user = self.request.user
                obj.book = self.get_object()
                obj.save()
        else:
            form = ReviewForm(self.request.POST, instance=qs.first())
            form.save()
        return redirect('books:book_detail', self.get_object().id)


class BookCreate(StaffRequiredMixin, generic.CreateView):
    """
        Book Create
        Author : Zeyad Obaia
    """
    model = Book
    fields = ['title', 'description', 'cover',
              'publication_date', 'category', 'authors']
    success_url = reverse_lazy('books:book_list')


class BookUpdate(StaffRequiredMixin, generic.UpdateView):
    """
        Book Update
        Author : Zeyad Obaia
    """
    model = Book
    fields = ['title', 'description', 'cover',
              'publication_date', 'category', 'authors']
    success_url = reverse_lazy('books:book_list')


class BookToggleRead(LoginRequiredMixin, generic.UpdateView):
    """
        Book Toggle book read status for the current logged-in user
        Author : Zeyad Obaia
    """
    model = Book

    def post(self, *args, **kwargs):
        qs = self.request.user.my_books.filter(id=self.get_object().pk)
        if qs.exists():
            self.request.user.my_books.remove(self.get_object())
            messages.info(self.request, "Removed from read list")
        else:
            self.request.user.my_books.add(self.get_object())
            messages.info(self.request, "Added to read list")

        return redirect('books:book_detail', self.get_object().id)


class BookDelete(StaffRequiredMixin, generic.DeleteView):
    """
        Book Delete
        Author : Zeyad Obaia
    """
    model = Book
    success_url = reverse_lazy('books:book_list')
