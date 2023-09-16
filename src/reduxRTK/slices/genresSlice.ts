import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IGenre, IGenresResponse } from 'type';
import { movieService } from 'services';
import { AxiosError } from "axios";

interface IState extends IGenresResponse {
    
    errors: string[],
}
const initialState: IState = {
    genres: [],
    errors: null
}


const getGenres = createAsyncThunk<{data: IGenresResponse}, void>(
    'genresSlice/getGenres',
    async(_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return {data}
        } catch (error) {
            const err = error as AxiosError;
            rejectWithValue(err.message)
        }
    }
)

const slice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {

    },
    extraReducers: builder => builder
        .addCase(getGenres.fulfilled, (state, action) => {
            state.genres = action.payload.data.genres
            state.errors = null
        })
        .addCase(getGenres.rejected, state => {
            state.errors.push("No Genres");
        })
})


const {reducer: genresReducer, actions} = slice

const genresActions = {
    ...actions,
    getGenres
}


export {
    genresActions,
    genresReducer
}
