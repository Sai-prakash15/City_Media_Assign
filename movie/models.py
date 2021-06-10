from django.db import models
import datetime

def current_year():
    return datetime.date.today().year

def upload_movie_image(instance, filename):
    return "files/movies/{filename}".format(filename=filename)

def upload_genre_image(instance, filename):
    return "files/genre/{filename}".format(filename=filename)

# Create your models here.

class Genre(models.Model):
    # Genre_CHOICES = (
    #     ('AC', 'Action'),
    #     ('DR', 'Drama'),
    #     ('BI', 'Biography'),
    #     ('CO', 'Comedy'),
    #     ('AN', 'Animation'),
    #     ('MS',' Mystery'),
    #     ('AD', 'Adventure'),
    #     ('CR', 'Crime')
    # )

    name = models.CharField(max_length=10,help_text='Enter Genre',unique=True)
    image = models.ImageField(upload_to=upload_genre_image, blank=True, null=True)

    def __str__(self):
        return str(self.name)[:]


class Movie(models.Model):
    name = models.CharField(max_length=10,help_text='Enter movie name',unique=True)
    release_year = models.IntegerField(default=current_year)
    genre = models.OneToOneField(Genre,on_delete=models.CASCADE)
    rating = models.FloatField()
    image = models.ImageField(upload_to=upload_movie_image, blank=True, null=True)

    def __str__(self):
        return str(self.name)[:]

