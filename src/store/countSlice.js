import { createSlice } from "@reduxjs/toolkit";

const countSlice =  createSlice({
    name:'countKey',
    initialState:{current_state:0},
    reducers:{
        increment:(state,action)=>{
            state.current_state += 1
        },
        decrement:(state,action)=>{
            state.current_state -= 1
        }

    }

})

export const {increment,decrement} = countSlice.actions
export  default countSlice.reducer