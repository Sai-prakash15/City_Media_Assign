import { put } from 'redux-saga/effects'
import * as actionTypes from './actions';
import axios from 'axios';
export function* fetchMoviesSaga(action) {
    try {
        const response = yield axios.get(`http://127.0.0.1:8000/movies/?q=${action.name}`)
        const movies = response.data
       yield put({type: actionTypes.UPDATEM, movies: movies});
    } catch (e) {
        console.log("err")
    }
 }


 export function* UpdateMoviesSaga(action) {
    try {

        const genres = {"1": "Action", "2":"Drama", "3": "Biography","4":"Comedy","5":"Animation","6":"Mystery", "7": "Adventure","8":"Crime"}
        
        const content = {
            "id": action.movie.id,
            "name": action.movie.name,
            "genre": action.genre,
        }
        const movie = {
            "id": action.movie.id,
            "name": action.movie.name,
            "genre_name": genres[action.genre],
            "rating":action.movie.rating,
            "release_year": action.movie.release_year
        }
        const response = yield axios
                                .put(
                                    `http://127.0.0.1:8000/movies/${action.movie.id}/`,
                                    content
                                )
                                .then(r => console.log(r.status))
                                .catch(e => console.log(e));
        alert("Updated in database")
        yield put({type: actionTypes.MOVIE,item:movie});
        yield put(actionTypes.getMovies(action.movie.genre_name));
    } catch (e) {
        console.log("err")
    }
 }

 export function* InitialSaga(action) {
    try {
        const response = yield axios.get(`http://127.0.0.1:8000/movies/?q=Action`)
        const responseg = yield axios.get(`http://127.0.0.1:8000/genre/`)
        yield put({type: actionTypes.UPDATEM, movies: response.data});
        yield put({type: actionTypes.UPDATEG, genres: responseg.data});
    } catch (e) {
        console.log("err")
    }
 }