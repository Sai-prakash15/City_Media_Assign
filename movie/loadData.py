# import os
#
# os.environ['DJANGO_SETTINGS_MODULE'] = 'city_media_b.settings'

import pandas as pd
# from city_media_b.movie.models import Movie

# movie = apps.get_model('movie.Movie')

tmp_data=pd.read_csv('/Users/sonuch/Downloads/Movies - Movies.csv',sep=',')
#ensure fields are named~ID,Product_ID,Name,Ratio,Description
#concatenate name and Product_id to make a new field a la Dr.Dee's answer
print(type(tmp_data))
for row in range(len(tmp_data)):
    name = "(".join(tmp_data.iloc[row]['Title'].split('(')[0:-1])
    release_year = int(tmp_data.iloc[row]['Title'].split('(')[-1][:-1])
    genre = tmp_data.iloc[row]['Genre']
    rating = float(tmp_data.iloc[row]['Rating'])
    print(name, release_year, genre, rating)
    # print(tmp_data.row['Title'])
    # print(tmp_data.ix[row]['Title'])


# Movies = [
#     Movie(
#         name = tmp_data.ix[row]['Name']
#         release_year =
#         genre =
#         rating = tmp_data.ix[row]['Description'],
#     )
#     for row in tmp_data['ID']
# ]
# Product.objects.bulk_create(Movies)