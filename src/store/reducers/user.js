import { createSlice } from '@reduxjs/toolkit'
// Slice
const user = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.user = null;
        },
    },
});
const { loginSuccess } = user.actions;
export default user.reducer;