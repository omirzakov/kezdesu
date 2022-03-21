import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth';
// Slice
const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
        isAuth: localStorage.getItem('token') ? true : false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
            state.token = null;
            state.isAuth = false;
            localStorage.removeItem('token');
        },
    },
    extraReducers: builder => {
        builder.addMatcher(authApi.endpoints.auth.matchFulfilled, (state, { payload }) => {
            const { accessToken } = payload;
            localStorage.setItem('token', accessToken);

            state.user = payload.email;
            state.isAuth = true;
            state.token = accessToken;
        })
    }
});
const { loginSuccess, logout } = user.actions;
export default user.reducer;