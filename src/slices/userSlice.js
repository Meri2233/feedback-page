import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        users:[]
    },
    reducers:{
        addUsers:(state,action)=>{
            state.users.push(action.payload);
        }
    }
})

export const {addUsers} = userSlice.actions;
export default userSlice.reducer;