# Generated by Django 2.2.5 on 2019-09-15 12:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_book_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='authors',
            field=models.ManyToManyField(related_name='books', to='books.Author'),
        ),
    ]
