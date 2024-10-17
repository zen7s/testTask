import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/Filter/Filter.slice'
import articleApi from '../entities/Article/Article.api'

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
