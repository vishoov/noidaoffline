import './App.css'
  import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './features/counterSlice'
import { useState } from 'react'

//useSelector -> extracts the state from the store 
//useDispatch -> dispatches the action to the store


function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todo.todos)
  const [todoState, setTodoState] = useState("");
  return (
   <div>
    <div>
        <span>{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick= {()=>dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick= {()=>dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Reset value"
          onClick= {()=>dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>


    <div>
      <h1>Todo List</h1>
      <input type="text" value = {todoState} onChange = {(e)=>setTodoState(e.target.value)} />
      <button onClick = {()=>{
        dispatch({type:'todo/addTodo', payload: todoState})
      }}
      >Add Todo</button>
      
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>{todo} <button onClick={()=>{
            dispatch({type:'todo/removeTodo', payload:index})
          }}>Delete</button></li>
        ))}
        
      </ul>
    </div>

        </div>


  )
}

export default App
