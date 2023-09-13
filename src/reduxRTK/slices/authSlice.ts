import { PayloadAction, createAsyncThunk, createSlice, isRejected } from "@reduxjs/toolkit";

import { authService } from "services";

import { IAuth, IUser } from "type"

type IState = {
    user: IUser
    error?: {
        detail?: string[]
    }
}

const initialState:IState = {
    error: null,
    user: null
}


const register = createAsyncThunk<IUser, {user: IAuth}>(
    'authSlice/register',
    async({user}, {rejectWithValue}) => {

       try {
            return await authService.register(user)
       } catch (error) {
        const err = error as Error;
        rejectWithValue(err.message)
       }
    }
)

const login = createAsyncThunk<IUser, {user: IAuth}>(
    "authSlice/login",
    async({user}, {rejectWithValue}) => {
        try {
            return await authService.login(user)

        } catch (error) {
            const err = error as Error;
            console.log("err", err)
            rejectWithValue({details: err.message})
        }
    }
)

const logOut = createAsyncThunk<null, void>(
    "authSlice/logOut", 
    async() => {
       return await authService.logOut()
    }
)

const slice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {

    }, 
    extraReducers: builder => builder 
        .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = null;
        })
        .addCase(login.rejected, (state, action) => {
            state.error = action.payload
        })
        .addCase(logOut.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
        })

        .addMatcher(isRejected(), (state, action) => {
            state.error = action.payload;
        })

})

const {reducer: authReducer, actions} = slice

const authActions = {
    ...actions,
    login,
    register,
    logOut,
}

export {
    authActions,
    authReducer,
}