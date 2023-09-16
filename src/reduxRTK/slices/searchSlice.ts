import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IMovies, IMoviesResponse, ISearchParams } from "type";
import { movieService } from "services";

interface IState extends Pick<IMoviesResponse, "page" | "total_pages"> {
    query?: string
    movies_search: IMovies[],
}

const initialState: IState = {
    query: null,
    movies_search: [],
    page: null,
    total_pages: null,
}


const search = createAsyncThunk<{data: IMoviesResponse}, {query?: ISearchParams}>(
    'searchSlice/search',
    async({query}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.search(query)
            return {data, query}
        } catch (error) {
            const err = error as AxiosError;
            rejectWithValue(err.message)
        }
    }
)



const slice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        setSearchQuery:(state, action: PayloadAction<string>) => {
            state.query = action.payload
        },
        setClearSearchQuery: (state, action) => {
            state.query = null
        }
    },
    extraReducers: builder => builder
        .addCase(search.fulfilled, (state, action) => {
            state.movies_search = action.payload.data.results
            state.page = action.payload.data.page
            state.total_pages = action.payload.data.total_pages
        })

})


const {reducer: searchReduser, actions} = slice

const searchActions = {
    ...actions,
    search
}


export {
    searchActions,
    searchReduser
}