import {take, takeEvery} from 'redux-saga/effects'

import * as actionTypes from './actions'
import { fetchMoviesSaga } from './sagas'

export function* watchMovies() {
    yield takeEvery(actionTypes.FETCHM, fetchMoviesSaga);
}