import * as actionTypes from './actions';

const initialState = {
    genres: [
        {
            "id": 1,
            "name": "Action",
            "image": "http://127.0.0.1:8000/files/genre/action.jpeg"
        },
        {
            "id": 2,
            "name": "Drama",
            "image": null
        },
        {
            "id": 3,
            "name": "Biography",
            "image": null
        },
        {
            "id": 4,
            "name": "Comedy",
            "image": null
        },
        {
            "id": 5,
            "name": "Animation",
            "image": null
        },
        {
            "id": 6,
            "name": "Mystery",
            "image": null
        },
        {
            "id": 7,
            "name": "Adventure",
            "image": null
        },
        {
            "id": 8,
            "name": "Crime",
            "image": null
        }
    ],
    curr_movies : [
        {
            "id": 8,
            "name": "Argo ",
            "release_year": 2012,
            "genre": 1,
            "rating": 7.7,
            "image": null
        },
        {
            "id": 17,
            "name": "Captain America: Civil War ",
            "release_year": 2016,
            "genre": 1,
            "rating": 7.9,
            "image": null
        },
        {
            "id": 18,
            "name": "Captain America: The Winter Soldier ",
            "release_year": 2014,
            "genre": 1,
            "rating": 7.8,
            "image": null
        },
        {
            "id": 23,
            "name": "Dawn of the Planet of the Apes ",
            "release_year": 2014,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 24,
            "name": "Deadpool ",
            "release_year": 2016,
            "genre": 1,
            "rating": 8.0,
            "image": null
        },
        {
            "id": 29,
            "name": "Doctor Strange ",
            "release_year": 2016,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 31,
            "name": "Edge of Tomorrow ",
            "release_year": 2014,
            "genre": 1,
            "rating": 7.9,
            "image": null
        },
        {
            "id": 35,
            "name": "Fury ",
            "release_year": 2014,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 38,
            "name": "Guardians of the Galaxy ",
            "release_year": 2014,
            "genre": 1,
            "rating": 8.1,
            "image": null
        },
        {
            "id": 49,
            "name": "Inception ",
            "release_year": 2010,
            "genre": 1,
            "rating": 8.8,
            "image": null
        },
        {
            "id": 52,
            "name": "Kick-Ass ",
            "release_year": 2010,
            "genre": 1,
            "rating": 7.7,
            "image": null
        },
        {
            "id": 53,
            "name": "Kingsman: The Secret Service ",
            "release_year": 2014,
            "genre": 1,
            "rating": 7.7,
            "image": null
        },
        {
            "id": 58,
            "name": "Lone Survivor ",
            "release_year": 2013,
            "genre": 1,
            "rating": 7.5,
            "image": null
        },
        {
            "id": 59,
            "name": "Mad Max: Fury Road ",
            "release_year": 2015,
            "genre": 1,
            "rating": 8.1,
            "image": null
        },
        {
            "id": 71,
            "name": "Rise of the Planet of the Apes ",
            "release_year": 2011,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 72,
            "name": "Rogue One ",
            "release_year": 2016,
            "genre": 1,
            "rating": 7.9,
            "image": null
        },
        {
            "id": 73,
            "name": "Rush ",
            "release_year": 2013,
            "genre": 1,
            "rating": 8.1,
            "image": null
        },
        {
            "id": 74,
            "name": "Scott Pilgrim vs. the World ",
            "release_year": 2010,
            "genre": 1,
            "rating": 7.5,
            "image": null
        },
        {
            "id": 77,
            "name": "Sicario ",
            "release_year": 2015,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 80,
            "name": "Skyfall ",
            "release_year": 2012,
            "genre": 1,
            "rating": 7.8,
            "image": null
        },
        {
            "id": 82,
            "name": "Star Trek Into Darkness ",
            "release_year": 2013,
            "genre": 1,
            "rating": 7.8,
            "image": null
        },
        {
            "id": 83,
            "name": "Star Wars: The Force Awakens ",
            "release_year": 2015,
            "genre": 1,
            "rating": 8.1,
            "image": null
        },
        {
            "id": 87,
            "name": "The Avengers ",
            "release_year": 2012,
            "genre": 1,
            "rating": 8.1,
            "image": null
        },
        {
            "id": 90,
            "name": "The Dark Knight Rises ",
            "release_year": 2012,
            "genre": 1,
            "rating": 8.4,
            "image": null
        },
        {
            "id": 92,
            "name": "The Fighter ",
            "release_year": 2010,
            "genre": 1,
            "rating": 7.8,
            "image": null
        },
        {
            "id": 98,
            "name": "The Hunger Games: Catching Fire ",
            "release_year": 2013,
            "genre": 1,
            "rating": 7.6,
            "image": null
        },
        {
            "id": 114,
            "name": "Warrior ",
            "release_year": 2011,
            "genre": 1,
            "rating": 8.2,
            "image": null
        },
        {
            "id": 118,
            "name": "X-Men: Days of Future Past ",
            "release_year": 2014,
            "genre": 1,
            "rating": 8.0,
            "image": null
        },
        {
            "id": 119,
            "name": "X-Men: First Class ",
            "release_year": 2011,
            "genre": 1,
            "rating": 7.8,
            "image": null
        }
    ],
    curr_genre: "Action"
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE:
            return{
                ...state,
                curr_genre: action.name
            }
    }

    return state
}

export default reducer;