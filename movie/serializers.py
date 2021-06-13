from rest_framework import serializers
from .models import Movie, Genre


class MovieSerializer(serializers.ModelSerializer):
    genre_name = serializers.CharField(source='genre.name', read_only=True)
    class Meta:
        model = Movie
        fields = [
            'id',
            'name',
            'release_year',
            'genre_name',
            'rating',
            'image',
        ]

    def validate(self, data):
        name = data.get("name", None)
        if name == "":
            name = None
        if name is None:
            raise serializers.ValidationError("Movie name is required")
        return data


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = [
            'id',
            'name',
            'image',
        ]

    def validate(self, data):
        name = data.get("name", None)
        if name == "":
            name = None
        if name is None:
            raise serializers.ValidationError("Genre name is required")
        return data
