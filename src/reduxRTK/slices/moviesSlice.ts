import { PayloadAction, createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IMovies, IMoviesResponse, IParams } from "type";
import { movieService } from 'services';



interface IState extends Pick<IMoviesResponse, "page" | "total_pages"> {
    movies: IMovies[],
    isLoading: boolean,
    errors: string

}

const initialState: IState = {
    movies: [],
    page: null,
    total_pages: null,
    isLoading: false,
    errors: null,

}

const getAll = createAsyncThunk<{ data: IMoviesResponse }, { params?: IParams | null }>(
    'moviesSlice/getAll',
    async ({ params }, { rejectWithValue }) => {
        try {
            const response = await movieService.getAll(params);

            const {data} = response
            return { data }
           
        } catch (error) {
            const err = error as AxiosError
            return rejectWithValue(err.message)
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
            state.errors = null;
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