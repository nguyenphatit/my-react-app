import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { UPDATE_USER, UPDATE_PRODUCT, INCREMENT_ASYNC, DECREMENT_ASYNC } from './../constants';
import { userSaga } from "./userSaga";
import { productSaga } from "./productSaga";
import { counterSaga } from "./counterSaga";

export function* rootSaga() {
    yield all([
        takeLatest(UPDATE_USER, userSaga),
        takeLatest(UPDATE_PRODUCT, productSaga),
        takeEvery([INCREMENT_ASYNC, DECREMENT_ASYNC], counterSaga)
    ])
}