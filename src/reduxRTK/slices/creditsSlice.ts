import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICasts } from "type";

interface IState {
    current_credits?: ICasts[]
    current_page?: number
    limit?: number
    total?: number
    prev?: number
    next?: number | null

}

const initialState: IState = {
    current_credits: null,
    current_page: 0,
    limit: 5,
    total: null,
    prev: null,
    next: null,
}


const slice = createSlice({
    name: "creditsSlice",
    initialState,
    reducers: {
        setCredits: (state, action: PayloadAction<IState>) => {
            state.current_credits = action.payload.current_credits
            state.current_page = action.payload.current_page
            state.total = action.payload.total
            state.next = action.payload.next
        },

        setPage: (state, action: PayloadAction<IState>) => {
            state.next = action.payload.next
            state.prev = action.payload.prev
            state.current_credits = action.payload.current_credits
            state.current_page = action.payload.current_page
        }
    },
    extraReducers: builder => builder
})

const { reducer: creditsReducer, actions } = slice;

const creditsActions = {
    ...actions
}

export {
    creditsActions,
    creditsReducer
}