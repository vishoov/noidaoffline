import { createSlice } from '@reduxjs/toolkit';

const savedData = JSON.parse(localStorage.getItem('feedbackData')) || {
    ratings:[],
    average:0,
    counts:{
        1:0,
        2:0,
        3:0,
        4:0,
        5:0
    }
}

const calculateAverage = (ratings)=>{
    if(ratings.length===0) return 0;
    const total = ratings.reduce((sum, item)=> sum + item.rating, 0)
    const average = (total/ratings.length).toFixed(1);
    return average;


}

const feedbackSlice = createSlice({
    name:"feedback",
    initialState: savedData,
    reducers:{
        addFeedback : (state, action)=>{
            const { rating, comment } = action.payload;
            state.ratings.push({rating, comment});
            state.counts[rating]+=1;
            state.average = calculateAverage(state.ratings);
        }
    }
})

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;