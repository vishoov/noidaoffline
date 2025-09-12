
import './App.css'


import { useSelector, useDispatch } from 'react-redux';
//redux specific hooks
import { increment, decrement, reset } from './features/counterSlice';



function App() {
  const count = useSelector((state)=>state.counter.count)
//useSelector is used to get the current state from the redux store
  //state -> entire redux store
  //state.counter -> counter slice
  //state.counter.count -> count variable from the counter slice
  const dispatch = useDispatch();
  //useDispatch is used to dispatch actions to the redux store


  return (
    <div>
   <h1>Hello World</h1>
   <h3>Welcome to the counter app using redux</h3>

   <h1>Counter </h1>

   <button onClick={()=>dispatch(increment())}>Increment</button>
   <button onClick={()=>dispatch(decrement())}>Decrement</button>
   <button onClick={()=>dispatch(reset())}>Reset</button>
   <h2>Count: {count}</h2>  
   </div>
  )
}

export default App
