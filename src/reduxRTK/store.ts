import {configureStore} from '@reduxjs/toolkit';

import { genresReducer, movieReducer, moviesReducer, searchReduser, themeReducer } from './slices';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        search: searchReduser,
        theme: themeReducer,
        genres: genresReducer,
    }
})

type RooState = ReturnType<typeof store.getState>
type AppDispatch =  typeof store.dispatch

export type {
    RooState,
    AppDispatch
}

export {
    store
}