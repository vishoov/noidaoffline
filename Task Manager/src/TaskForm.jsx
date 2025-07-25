import React, { useState } from 'react'

const TaskForm = ({handleTaskUpdate}) => {
    const [title, setTitle] = useState('')
    const [category, setCategory]=useState('')

    const handleSubmit = (e)=>{

        e.preventDefault();
        //to prevent reloading and missing of information
        handleTaskUpdate({
            title:title.trim(),
            category:category.trim()
        })
        


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Task Title:</label>
            <input 
                type='text'
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                placeholder='Enter the task title'
                />
                <input 
                type='text'
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                placeholder='Please Enter Category'
                />

                <p>
                    {title}, {category}
                </p>
                <button type="submit" >Add Task</button>

        </form>
    </div>
  )
}

export default TaskForm