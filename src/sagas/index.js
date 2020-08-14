import { all, takeEvery } from 'redux-saga/effects';
import { INCREMENT_ASYNC, DECREMENT_ASYNC } from '../constants'
import { counterSaga } from './counterSaga';

export function* rootSaga() {
    yield all([
        takeEvery([INCREMENT_ASYNC, DECREMENT_ASYNC], counterSaga),
    ])
}