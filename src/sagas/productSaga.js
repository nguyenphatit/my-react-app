import { put, call } from 'redux-saga/effects';
import { UPDATE_PRODUCT_SUCCESS } from '../constants';

export function* productSaga(action) {
    const { id } = action.payload;

    const result = yield call(() => {
        return id === 2 ? [
            { id: 1, name: '😉' },
            { id: 2, name: '🤔' },
            { id: 3, name: '🤞' },
            { id: 4, name: '👍' },
            { id: 5, name: '🍌' },
            { id: 6, name: '👌' },
            { id: 7, name: '💦' },
        ] : []
    });

    yield put({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: result
    })
}
