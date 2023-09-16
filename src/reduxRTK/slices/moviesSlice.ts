import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IMovies, IMoviesResponse, IParams } from "type";
import { movieService } from 'services';

interface IState extends Pick<IMoviesResponse, "page" | "total_pages"> {
    movies: IMovies[],
    isLoading: boolean
    error: string,
}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    isLoading: false,
    error: null,

}

const getAll = createAsyncThunk<{ data: IMoviesResponse }, { params?: IParams | null }>(
    'moviesSlice/getAll',
    async ({ params }, { rejectWithValue }) => {
        try {
            const response = await movieService.getAll(params);
            if (response.status === 200) {
                const {data} = response
                return { data }
            } else if (response.status === 422) {
                return rejectWithValue("Oooooops...")
            }
        } catch (error) {
            const err = error as AxiosError
            rejectWithValue(err.message)
        }
    }
)

const slice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.isLoading = null;
            state.error = null;
            state.movies = action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
        })

})

const { reducer: moviesReducer, actions } = slice;

const moviesActions = {
    ...actions,
    getAll,
}

export {
    moviesReducer,
    moviesActions
}