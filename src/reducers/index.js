import { combineReducers } from "redux"
import userReducer from './userReducer';
import productReducer from './productReducer';
import counterReducer from './counterReducer';

const allReducers = combineReducers({
    userReducer,
    productReducer,
    counterReducer
});

export default allReducers;