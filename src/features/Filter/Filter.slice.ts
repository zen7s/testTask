import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  startswith: '',
  endswith: '',
  contains: '',
  article: '',
  price_from: 0,
  price_to: 0,
  brand_id: 0,
  page: 1,
  max_result: 10,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload }
    },

    resetFilters: () => initialState,
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { setFilters, resetFilters, setPage } = filtersSlice.actions
export default filtersSlice.reducer
