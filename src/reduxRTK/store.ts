import {configureStore} from '@reduxjs/toolkit';

import { moviesReducer, themeReducer } from './slices';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
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