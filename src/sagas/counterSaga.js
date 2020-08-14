import { INCREMENT_ASYNC, INCREMENT, DECREMENT_ASYNC, DECREMENT } from "../constants";
import { put, delay } from 'redux-saga/effects';

export function* counterSaga(action) {

    if (action.type && action.type === INCREMENT_ASYNC) {
        yield delay(1000);
        yield put({ type: INCREMENT })
        yield delay(1000);
        yield put({ type: INCREMENT })
        yield delay(1000);
        yield put({ type: INCREMENT })
        yield delay(1000);
        yield put({ type: INCREMENT })
        yield delay(1000);
        yield put({ type: INCREMENT })
    }

    if (action.type && action.type === DECREMENT_ASYNC) {
        yield delay(1000);
        yield put({ type: DECREMENT })
        yield delay(1000);
        yield put({ type: DECREMENT })
        yield delay(1000);
        yield put({ type: DECREMENT })
        yield delay(1000);
        yield put({ type: DECREMENT })
        yield delay(1000);
        yield put({ type: DECREMENT })
    }
}