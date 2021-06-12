from django.shortcuts import render
from rest_framework import generics, mixins, status
from rest_framework.views import APIView
from .models import Movie, Genre
from .serializers import MovieSerializer, GenreSerializer
import pandas as pd
from rest_framework.response import Response


# Create your views here.

class MovieAPIView(
    generics.ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
    search_fields = ['genre__name']


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


class loadData(APIView):

    def post(self, request, format=None):
        tmp_data = pd.read_csv('/Users/sonuch/Downloads/Movies - Movies.csv', sep=',')
        Movies = []
        for row in range(len(tmp_data)):
            temp = Movie(
                name="(".join(tmp_data.iloc[row]['Title'].split('(')[0:-1]),
                release_year=int(tmp_data.iloc[row]['Title'].split('(')[-1][:-1]),
                genre=Genre.objects.get(name=tmp_data.iloc[row]['Genre']),
                rating=float(tmp_data.iloc[row]['Rating'])
            )
            # print(temp)
            Movies.append(temp)
        # print(Movies)

        Movie.objects.bulk_create(Movies)

        return Response(status=status.HTTP_201_CREATED)
