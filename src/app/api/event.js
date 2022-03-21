import { api } from './main';

export const eventApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getEvent: builder.query({
            query: (data) => {
                return {
                    url: '/action/listEvent',
                }
            }
        })
    })
})

export const { useGetEventQuery } = eventApi;