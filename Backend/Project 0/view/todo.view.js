const express = require('express');
// import express from 'express'
const router = express.Router();


const todos = [
    {
        id:1,
        description:"Water the plants",
        status:"incomplete"
    },
    {
        id:2,
        description:"Go to doctor",
        status:"completed"
    }

]

//To do 
//addTodo -> user will send task description, you have to push that task into this array
router.post('/addTodo', (req, res)=>{
    //req-> json -> head, body
    const description = req.body.description;

    //Express.JS PARSES the REQUEST JSON AND CREATES A req OBJECT THAT WE CAN DIRECTLY IMPORT IN OUR ROUTE HANDLER FUNCTION

// -------Route logic/ business logic/ function logic
    // logic to add the task into the array of tasks
    const newTask = {
        id:todos.length+1,
        description:description,
        status:"incomplete"
    }
    //add the newTask to the array
    todos.push(newTask);
    console.log(todos);
// ---------------------------------------------------
res.send('The new task has been added')
    
});



//route handler app.method('route', function)
//readTodo -> send all tasks 
router.get("/readTodo", (req, res)=>{
    res.send(todos);
})



//updateTodo -> id, status update 
router.put("/updateTodo", (req, res)=>{
    const id = req.body.id;

    todos.map((task)=>{
        if(task.id===id){
            task.status="completed"
        }
    })

    res.send(todos)
})


module.exports= router;