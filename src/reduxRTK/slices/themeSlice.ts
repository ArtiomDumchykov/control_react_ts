import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ITheme = "light" | "dark";

const slice = createSlice({
    name: "theme",
    initialState: 'light' as ITheme ,
    reducers: {
        setTheme: (_, action: PayloadAction<ITheme>) => action.payload
    }
})

const {reducer: themeReducer, actions} = slice;

const themeActions = {
    ...actions
}

export {
    themeActions,
    themeReducer
}