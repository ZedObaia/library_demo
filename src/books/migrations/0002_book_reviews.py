# Generated by Django 2.2.5 on 2019-09-15 09:36

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('books', '0001_initial'),
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='reviews',
            field=models.ManyToManyField(related_name='my_reviews', through='reviews.Review', to=settings.AUTH_USER_MODEL),
        ),
    ]
