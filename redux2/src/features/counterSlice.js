import { createSlice } from '@reduxjs/toolkit'

const counterSlice= createSlice({

    name:"counter",
    
    initialState:{
        count:0
    },
    reducers:{
        //list of actions that can be performed on the state
        //state -> current state of the data 
        increment:(state)=>{    
            state.count += 1
        },
        decrement:(state)=>{
            if(state.count>0){
            state.count-=1
            }
        },
        reset:(state)=>{
            if(state.count!==0){
                state.count=0
            }
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice.reducer