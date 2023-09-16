import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieService } from "services";
import { IMovies, IMoviesResponse, ISearchParams } from "type";

interface IState  extends Pick<IMoviesResponse, "page" | "total_pages">{
    query?: string
    page: number
    movies_search: IMovies[],
    
}

const initialState: IState = {
    movies_search: null,
    query: null,
    page: null,
    total_pages: null,
}

const search = createAsyncThunk<{data: IMoviesResponse}, {query?: ISearchParams}>(
    'searchSlice/search',
    async({query}, {rejectWithValue}) => {
        try {
            // const {data} = await movieService.search(query)
            const {data} = await movieService.search(query)
            return data
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
        
    },
    extraReducers: builder => builder
        .addCase(search.fulfilled, (state, action) => {
            // state.movies_search = action.payload.data.results
            // state.page = action.payload.data.page
            // state.total_pages = action.payload.data.total_pages
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