import { api } from './main';

export const eventApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEvent: builder.query({
            query: (data) => {
                return {
                    url: '/action/list-event',
                }
            }
        }),
        blockEvent: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/block-event',
                    method: 'POST',
                    body: data
                }
            }
        }),
        deleteEvent: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/delete-event',
                }
            }
        }),
        createEvent: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/save-event',
                    method: 'POST',
                    body: data
                }
            }
        }),
    })
})

export const { useGetEventQuery, useBlockEventMutation, useCreateEventMutation, useDeleteEventMutation } = eventApi;