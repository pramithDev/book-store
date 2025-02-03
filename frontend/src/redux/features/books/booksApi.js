import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/baseURL';

const baseQuery = fetchBaseQuery({ 
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            Headers.set('authorization', `Bearer ${token}`);
        }
        return Headers;
    }
});

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    endpoints: (builder) => ({
        fatchAllBooks: builder.query({
            query: () => '/',
            providesTags: ['Books'],
        }),
    })
})

export const { useFatchAllBooksQuery } = booksApi;
export default booksApi;