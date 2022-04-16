import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'http://65.108.149.23:8082/admin';

const baseQuery = retry(
    fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('token');
            console.log(token);
            if(token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        }
    }),
    { maxRetries: 0 }
);

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        localStorage.removeItem('auth');
        window.location.reload();
    }
    return result;
};

export const api = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    tagTypes: [],
    endpoints: () => ({})
});
