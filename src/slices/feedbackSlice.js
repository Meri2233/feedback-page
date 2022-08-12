import { createSlice } from "@reduxjs/toolkit";

const feedBackSlice = createSlice({
    name:"feedback",
    initialState:{
        feedbacks:{}
    },
    reducers:{
        addFeedback:(state,action)=>{

        }
    }
})

export const {addFeedback} = feedBackSlice.actions;
export default feedBackSlice.reducer;