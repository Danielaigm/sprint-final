import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../reducers/LoginReducers';
import { restaurantReducer } from '../reducers/restaurantReducer';

const reducer = {
    login: loginReducer,
    restaurants: restaurantReducer
};

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;