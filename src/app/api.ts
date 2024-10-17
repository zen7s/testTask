import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API_URL = 'https://upds27-85-175-194-59.ru.tuna.am/api'

const $api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
})

export default $api
