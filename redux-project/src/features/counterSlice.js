//import createSlice for creating a slice that is the feature
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state of the counter
const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    reset:(state)=>{
        state.value=0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions

export default counterSlice.reducer