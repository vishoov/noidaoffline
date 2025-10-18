import { configureStore } from "@reduxjs/toolkit";

import feedbackReducer from '../features/feedback/feedbackSlice'

const store = configureStore({
    reducer:{
        feedback:feedbackReducer
    }
})

//persisting data in local Storage
store.subscribe(()=>{
    localStorage.setItem('feedbackData', JSON.stringify(store.getState().feedback))
})

export default store;