import {configureStore} from "@reduxjs/toolkit";
import feedbackReducer from "./slices/feedbackSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer:{
        feedback:feedbackReducer,
        user:userReducer
    }
})

export {store};