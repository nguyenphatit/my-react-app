import { put, call } from 'redux-saga/effects';
import { UPDATE_USER_SUCCESS } from '../constants';

export function* userSaga(action) {
    const { id } = action.payload;

    const result = yield call(() => id === 1 ? 'Phat' : '');

    yield put({
        type: UPDATE_USER_SUCCESS,
        payload: result
    })
}
