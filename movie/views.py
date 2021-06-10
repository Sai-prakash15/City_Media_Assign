from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Movie, Genre
from .serializers import MovieSerializer, GenreSerializer


# Create your views here.

class MovieAPIView(
    generics.ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()


class MovieDetailAPIView(mixins.UpdateModelMixin, generics.RetrieveAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'id'

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

class GenreAPIView(
    generics.ListAPIView):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()
