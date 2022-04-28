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
            console.log(payload)

            const { eventResponses } = payload;
            state.data = eventResponses;
        })
    }
});
export default event.reducer;