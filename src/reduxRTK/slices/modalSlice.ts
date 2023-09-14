import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "modalSlice",
    initialState: {},
    reducers: {

    }
})

const { reducer: modalReducer, actions } = slice

const modalActions = {
    ...actions
}

export {
    modalActions,
    modalReducer
}