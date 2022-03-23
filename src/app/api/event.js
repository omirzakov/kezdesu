import { api } from './main';

export const eventApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEvent: builder.query({
            query: (data) => {
                return {
                    url: '/action/listEvent',
                }
            }
        }),
        blockEvent: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/blockEvent',
                }
            }
        }),
        deleteEvent: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/deleteEvent',
                }
            }
        })
    })
})

export const { useGetEventQuery, useBlockEventMutation } = eventApi;