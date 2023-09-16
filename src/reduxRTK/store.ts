import {configureStore} from '@reduxjs/toolkit';

import { movieReducer, moviesReducer, searchReduser, themeReducer } from './slices';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        search: searchReduser,
        theme: themeReducer,
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