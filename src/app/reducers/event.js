import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth';
import { eventApi } from '../api/event';
// Slice
const event = createSlice({
    name: 'event',
    initialState: {
        data: null,
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addMatcher(eventApi.endpoints.getEvent.matchFulfilled, (state, { payload }) => {
            const { events } = payload;
            state.data = events;
        })
    }
});
export default event.reducer;