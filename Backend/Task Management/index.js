//1. 
const express = require('express')
const app = express();

const mongoose = require('mongoose');


// mongodb://localhost:27017

//promise to connect to the database
mongoose.connect('mongodb+srv://vverma971_db_user:TTJoZztbPJrg8AuD@cluster0.atjoa6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(
    ()=>{
        console.log("Connected to DB")
    }
)
.catch((err)=>{
    console.error(err.message)
})



const taskRoutes = require("./view/task.view")

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("Welcome to task manager api")
})

app.use('/tasks', taskRoutes)


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})



