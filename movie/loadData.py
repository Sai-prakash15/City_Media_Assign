import pandas as pd

tmp_data = pd.read_csv('/Users/sonuch/Downloads/Movies - Movies.csv', sep=',')

print(type(tmp_data))
for row in range(len(tmp_data)):
    name = "(".join(tmp_data.iloc[row]['Title'].split('(')[0:-1])
    release_year = int(tmp_data.iloc[row]['Title'].split('(')[-1][:-1])
    genre = tmp_data.iloc[row]['Genre']
    rating = float(tmp_data.iloc[row]['Rating'])
    print(name, release_year, genre, rating)
    # print(tmp_data.row['Title'])
    # print(tmp_data.ix[row]['Title'])
