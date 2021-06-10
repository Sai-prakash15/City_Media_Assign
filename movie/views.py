from django.shortcuts import render
from rest_framework import generics, mixins
from .models import Movie
from .serializers import MovieSerializer


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
