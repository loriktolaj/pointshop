import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

const baseQuery = fetchBaseQuery ({baseUrl: BASE_URL});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({}),
});

// the default is GET
// query is to GET
// mutation is to UPDATE

// Redux basically works as this - add a product for example  on View. Then Actions fires off with that new product as the payload and then Actions fetches data
// with the backend API. And then the Reducer changes the state and adds the new product and then gets send to the entire components in the application.

// Slices are collections of reducers and actions that are releated to each other.