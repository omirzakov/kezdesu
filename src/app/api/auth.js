import { api } from './main';

export const authApi = api.injectEndpoints({
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (data) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body: data
                }
            }
        })
    })
})

export const { useAuthMutation } = authApi;