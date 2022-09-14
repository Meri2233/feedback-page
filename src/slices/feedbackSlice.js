import { createSlice } from "@reduxjs/toolkit";

const feedBackSlice = createSlice({
    name:"feedback",
    initialState:{
        feedbacks:[]
    },
    reducers:{
        addFeedback:(state,action)=>{
            state.feedbacks.push(action.payload);
        }
    }
})

export const {addFeedback} = feedBackSlice.actions;
export default feedBackSlice.reducer;