import { takeEvery} from 'redux-saga/effects'

import * as actionTypes from './actions'
import { fetchMoviesSaga, UpdateMoviesSaga } from './sagas'

export function* watchMovies() {
    yield takeEvery(actionTypes.FETCHM, fetchMoviesSaga);
    yield takeEvery(actionTypes.MOVIESAGA, UpdateMoviesSaga);
}