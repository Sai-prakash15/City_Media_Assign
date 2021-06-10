from rest_framework import serializers
from .models import Movie


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'id',
            'name',
            'release_year',
            'genre',
            'rating',
            'image',
        ]

    def validate(self, data):
        name = data.get("name", None)
        if name == "":
            name = None
        if name is None:
            raise serializers.ValidationError("name is required")
        return data
