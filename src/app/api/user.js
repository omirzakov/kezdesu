import { api } from './main';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (data) => {
                return {
                    url: '/action/listClient',
                }
            }
        }),
        getBlockUsers: builder.query({
            query: (data) => {
                return {
                    url: '/action/listClient?blocked=true',
                }
            }
        }),
        blockUser: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/blockClient',
                    method: 'POST',
                    body: data
                }
            }
        }),
    })
})

export const { useGetUsersQuery, useBlockUserMutation, useGetBlockUsersQuery } = userApi;