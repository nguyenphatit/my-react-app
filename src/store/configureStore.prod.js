import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../reducers';
import { rootSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(allReducers, middlewares);

sagaMiddleware.run(rootSaga);

export default store;