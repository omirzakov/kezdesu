import { api } from './main';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (data) => {
                return {
                    url: '/action/list-client',
                }
            }
        }),
        getBlockUsers: builder.query({
            query: (data) => {
                return {
                    url: '/action/list-client?blocked=true',
                }
            }
        }),
        blockUser: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/block-client',
                    method: 'POST',
                    body: data
                }
            }
        }),
        unblockClient: builder.mutation({
            query: ({ id }) => {

                return {
                    url: '/action/unblock-client',
                    method: 'POST',
                    body: {
                        id
                    }
                }
            }
        }),
        reports: builder.query({
            query: () => {

                return {
                    url: '/action/list-complain',
                }
            }
        }),
    })
})

export const { useGetUsersQuery, useBlockUserMutation, useGetBlockUsersQuery, useUnblockClientMutation, useReportsQuery } = userApi;