import { api } from './main';

export const categoryApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: (data) => {
                return {
                    url: '/action/list-category',
                }
            }
        }),
        deleteCategory: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/delete-category',
                    method: 'POST',
                    body: data
                }
            }
        }),
        editCategory: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/action/edit-category',
                    method: 'POST',
                    body: data
                }
            }
        }),
        saveCategory: builder.mutation({
            query: (data) => {
                return {
                    url: '/action/save-category',
                    method: 'POST',
                    body: data
                }
            }
        }),
    })
})

export const { useGetCategoryQuery, useDeleteCategoryMutation, useSaveCategoryMutation, useEditCategoryMutation } = categoryApi;