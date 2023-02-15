// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseURL } from '..'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: BaseURL }),
    keepUnusedDataFor: 600,
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => `/b/63bd23fe15ab31599e3290c1`,
            keepUnusedDataFor: 300,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery } = postApi