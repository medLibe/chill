import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './MoviesSlice';
import myListReducer from './MyListSlice';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        myList: myListReducer
    }
});

export default store;