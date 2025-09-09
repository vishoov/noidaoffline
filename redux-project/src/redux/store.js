import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'
import todoReducer from '../features/todo'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo : todoReducer,
  },
})