import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import rootReducer from "../reducers";
import logMiddleware from "../middleware/log";

const store = createStore(rootReducer, applyMiddleware(logMiddleware));

export default store;