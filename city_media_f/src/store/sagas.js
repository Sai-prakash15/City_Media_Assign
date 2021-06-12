import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
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

 export function* InitialSaga(action) {
    try {
        const response = yield axios.get(`http://127.0.0.1:8000/movies/?q=Action`)
        const movies = response.data
       yield put({type: actionTypes.UPDATEM, movies: movies});
    } catch (e) {
        console.log("err")
    }
 }