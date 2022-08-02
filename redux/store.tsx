import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import jokeReducer from './reducers';

const store = configureStore({
    reducer: {
        joke: jokeReducer,
    },
    middleware: [thunk],
    devTools: true,
})

export default store;