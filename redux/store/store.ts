import { configureStore, createReducer } from '@reduxjs/toolkit'
import cartReducer from '../slices/CartSlice'
//Default export is cartSlice.reducer so it can be imported with any name we want
// ...
const store = configureStore({
  reducer: {
    cart : cartReducer
  },
})

export type AppDispatch = typeof store.dispatch// Export a hook that can be reused to resolve types


export type RootState = ReturnType<typeof store.getState>

export default store

// import { useDispatch, useSelector } from 'react-redux'
// import type { TypedUseSelectorHook } from 'react-redux'
// import type { RootState, AppDispatch } from './store'

// // Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector