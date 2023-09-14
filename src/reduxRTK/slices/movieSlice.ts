import { createSlice } from "@reduxjs/toolkit";
import { ICasts, ICrew, IMovieInfo, IVideo } from "type";

interface IState {
    movieId: number | string,
    movie: IMovieInfo,
    credits: {
        id: number,
        cast?: ICasts[],
        crew?: ICrew[],
    }
    videos: IVideo[],
}


const initialState: IState = {
    movieId: null,
    movie: null,
    credits: null,
    videos: null,

}

const slice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {

    },
    extraReducers: builder => builder 
})

const { reducer: movieReducer, actions} = slice


const movieActions = {
    ...actions
}

export {
    movieActions,
    movieReducer
}