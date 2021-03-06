import { api } from './main';

export const cityApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCity: builder.query({
            query: (data) => {
                return {
                    url: '/action/list-city',
                }
            }
        }),
        deleteCity: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/delete-city',
                    method: 'POST',
                    body: data
                }
            }
        }),
        editCity: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/edit-city',
                    method: 'POST',
                    body: data
                }
            }
        }),
        saveCity: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/save-city',
                    method: 'POST',
                    body: data
                }
            }
        }),
    })
})

export const { useGetCityQuery, useDeleteCityMutation, useEditCityMutation, useSaveCityMutation } = cityApi;