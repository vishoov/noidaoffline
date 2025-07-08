import React from 'react'
import { useState } from 'react';
const Todo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" }
    ]);
    const handleSubmit = (event)=>{
        event.preventDefault();
        const newTask = event.target[0].value;
        if (newTask.trim() === "") return; // Prevent adding empty tasks
        const newTaskObj = {
            id: tasks.length + 1, // Simple ID generation  
            name: newTask
        };
        setTasks([...tasks, newTaskObj]);
        event.target.reset(); // Clear the input field after submission
        
    }

    const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <div>
        <h1> Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task" />
            <button type="submit">Add</button>
        </form>

        <ul>
            {
                tasks.map((task, index)=>
                    <li key ={task.id}>
                        {task.name}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                )
            }
        </ul>


    </div>
  )
}

export default Todo