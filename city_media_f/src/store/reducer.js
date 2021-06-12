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
    curr_movies : null,
    curr_genre: "Action"
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CHANGE:
            return{
                ...state,
                curr_genre: action.name
            }
        case actionTypes.UPDATEM:
            return{
                ...state,
                curr_movies: action.movies
            }
    }

    return state
}

export default reducer;