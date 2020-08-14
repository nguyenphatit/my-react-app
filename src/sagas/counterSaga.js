import { put, delay } from 'redux-saga/effects';
import { INCREMENT, INCREMENT_ASYNC, DECREMENT, DECREMENT_ASYNC } from '../constants';

export function* counterSaga(action) {
    if (action.type === INCREMENT_ASYNC) {
        yield delay(1000)
        yield put({ type: INCREMENT })
        yield delay(1000)
        yield put({ type: INCREMENT })
        yield delay(1000)
        yield put({ type: INCREMENT })
    } 
    
    if (action.type === DECREMENT_ASYNC) {
        yield delay(1000)
        yield put({ type: DECREMENT })
        yield delay(1000)
        yield put({ type: DECREMENT })
        yield delay(1000)
        yield put({ type: DECREMENT })
    }

}
