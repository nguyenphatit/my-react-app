import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from '../sagas';
import { createLogger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

let middlewares = applyMiddleware(sagaMiddleware);

if (process.env.NODE_ENV !== 'production') {
    middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()));
}

const store = createStore(allReducers, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
