import $api from '../../app/api'
import { FilterParams } from '../../features/Filter/Filter.types'
import { ApiResponse, Brands } from './Article.types'

const articleApi = $api.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query<ApiResponse, FilterParams>({
      query: (params) => ({ url: '/catalog', params }),
    }),

    getBrands: builder.query<Brands[], void>({
      query: () => ({
        url: '/brands',
      }),
    }),
  }),
})

export const { useGetArticlesQuery, useGetBrandsQuery, useLazyGetBrandsQuery } = articleApi
export default articleApi
