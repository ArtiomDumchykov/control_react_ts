import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieService } from "services";
import { ICasts, ICredits, ICrew, IMovieInfo, IVideo, IVideos } from "type";

interface IState {
    movieId: number | string,
    movie: IMovieInfo,
    credits: {
        id: number,
        cast?: ICasts[],
        crew?: ICrew[],
    }
    videos: IVideo[],
    errors?: string[]
}


const initialState: IState = {
    movieId: null,
    movie: null,
    credits: null,
    videos: null,
    errors: null

}

const getMovie = createAsyncThunk<IMovieInfo, {movieId: string}>(
    'movieSlice/getMovie',
    async({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(movieId)
            return data
        } catch (error) {
            const err = error as AxiosError
            rejectWithValue(err)
        }
    }
)
const getMovieCredits = createAsyncThunk<ICredits, {movieId: string}>(
    'movieSlice/getMovieCredits',
    async({movieId}, {rejectWithValue}) => {
        try {
            const { data } = await movieService.getCredits(movieId)
            return data
        } catch (error) {
            const err = error as AxiosError
            rejectWithValue(err)
        }
    }
)

const getMovieTrailers = createAsyncThunk<Pick<IVideos, "results"> , {movieId: string}>(
    'movieSlice/getMovieTrailers',
    async({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieTrailer(movieId)
            return data
        } catch (error) {
            const err = error as AxiosError
            rejectWithValue(err)
        }
    }
)


const slice = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        setClearMovieInfo: (state) => {
            state.movieId = null
            state.movie = null;
            state.credits = null;
            state.videos = null;
            state.errors = null
        }
    },
    extraReducers: builder => builder
        .addCase(getMovie.fulfilled, (state, action) => {
            state.movie = action.payload
        }) 
        .addCase(getMovie.rejected, (state) => {
            state.errors.push("No Movie")
        }) 
        .addCase(getMovieCredits.fulfilled, (state, action) => {
            state.credits = action.payload
        }) 
        .addCase(getMovieCredits.rejected, (state) => {
            state.errors.push("No Credits")
        }) 
        .addCase(getMovieTrailers.fulfilled, (state, action) => {
            state.videos = action.payload.results
        }) 
        .addCase(getMovieTrailers.rejected, (state) => {
            state.errors.push("No Trailer")
        }) 
})

const { reducer: movieReducer, actions} = slice


const movieActions = {
    ...actions,
    getMovie,
    getMovieCredits,
    getMovieTrailers,
}

export {
    movieActions,
    movieReducer
}