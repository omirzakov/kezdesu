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
        }),
        resetPassword: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/reset-password',
                    method: 'POST',
                    body: data
                }
            }
        }),
        getAccount: builder.query({
            query: () => {
                return {
                    url: '/action/get-account',
                }
            }
        })
    })
})

export const { useAuthMutation, useResetPasswordMutation, useGetAccountQuery } = authApi;