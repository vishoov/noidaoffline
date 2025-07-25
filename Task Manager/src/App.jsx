import { useState } from 'react'
import React from 'react'
import TaskForm from './TaskForm'
// 1. create tasks 
    // a. state for tasks 


function App() {
const [tasks, setTasks]=useState([])
const [filter, setFilter] = useState("")
const [filteredTasks, setFilteredTasks] = useState([])

const addTask = (taskData)=>{
  const newTask = {
    id: Date.now(),
    title:taskData.title,
    category:taskData.category
  }
  setTasks([...tasks, newTask])
  console.log(tasks)
}

const updateFilteredTasks = (value)=>{
const filtered = tasks.filter((ele)=>{
  return ele.title.includes(value)
})
setFilteredTasks(filtered)

}

const onDelete=(id)=>{
  const filtered = tasks.filter((ele)=>{
    // if(ele.id===id){
    //   return ele.category="done"
    // }
    return ele.id!==id

  })
  setTasks(filtered)
}

  return (
    <>
<h1>This is a task manager built in react</h1>
    <TaskForm handleTaskUpdate={addTask}/>
    <p>{filter}</p>
    <ul>
    {tasks.map((ele, key)=> { return <li key={key} >id :{ele.id}, Task: {ele.title}, Status: {ele.category} <button onClick={()=>onDelete(ele.id)}>Toggle</button></li>})}
    </ul>
  
    <h1>Filtered Tasks</h1>
    <input type = "text" onChange = {(e)=>updateFilteredTasks(e.target.value)} placeholder="Search by title" />
    <ul>
      {filteredTasks.map((ele, key)=>{ 

          return <li key={key} >id :{ele.id}, Task: {ele.title}, Status: {ele.category} <button onClick={()=>onDelete(ele.id)}>Toggle</button></li>
        }
      )}

    </ul>
      </>
  )
}

export default App
