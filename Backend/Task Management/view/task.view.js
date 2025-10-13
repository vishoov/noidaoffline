const express = require('express');

const router = express.Router();


//create a task
router.post('/create', (req, res)=>{
    res.send("Task created")
})

//read tasks
router.get('/tasks', (req, res)=>{
    res.send("Tasks")
})

//update Task

router.put("/updateTask/:id", (req, res)=>{
    const id = req.params.id;

    res.send(`your task with id ${id}, is updated`)
})


//delete a task
router.delete("/delete/:id", (req, res)=>{
    const id = req.params.id;

    res.send(`Task with id ${id}, deleted successfully`);
})

//search a task (optional)

router.get("/search", (req, res)=>{
    const query = req.query.q;

    res.send(`Task with title or description ${query}`)
})




module.exports = router;