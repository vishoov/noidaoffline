
import './App.css'
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from './features/feedback/feedbackSlice';

function App() {

  const dispatch = useDispatch();
  const { ratings, average, counts } = useSelector((state)=>state.feedback)
 const [rating, setRating] = useState(0)
 const [ comment, setComment ] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!rating) return alert("Select a rating");
    if(!comment) return alert("Please write a comment first");

    dispatch(
      addFeedback({
        rating: Number(rating),
        comment
      })
    )

    // localStorage.setItem('feedbackData', JSON.stringify({rating, comment}))
    setRating("");
    setComment("")
  }

  // useEffect(()=>{
  //   const data = localStorage.getItem('feedbackData')
  // })

  return (
    <div style={{width:'100%', padding:'20px'}}>
      <h2>Feedback Collector</h2>
      <form onSubmit={handleSubmit}  >
        <label>Rating:</label>
        <select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <option value="">Select</option>
          {
            [1,2,3,4,5].map((num)=>{
              return <option key={num} value={num}>
                {num}
              </option>
            })
          }
        </select>
        <br/>
        <label>Comment: </label>
        <input 
        type='text'
        value={comment}
        onChange={(e)=>setComment(e.target.value)}

        />
        <br/>

        <button type='Submit'>Submit Feedback</button>
      </form>

      <h2>Average Rating: {average}</h2>

      <h4>All Feedbacks:</h4>
      <ul>
        {
          ratings.map((feedback, item)=>{
           return  <li key={item}>
              {feedback.rating}* - {feedback.comment}
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
