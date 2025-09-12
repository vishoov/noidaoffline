//configureStore is used to create a redux store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";



const store = configureStore({
    reducer: {
        counter: counterReducer
    },
})



//data implementation logic that will be through reducers and actions

export default store;
