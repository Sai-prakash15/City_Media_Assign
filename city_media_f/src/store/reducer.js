import * as actionTypes from './actions';

const initialState = {
    genres: null,
    curr_movies : null,
    curr_genre: "Action",
    movie: null
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
        case actionTypes.UPDATEG:
            return{
                ...state,
                genres: action.genres
            }
        case actionTypes.MOVIE:
            return{
                ...state,
                movie: action.item
            }
    }

    return state
}

export default reducer;