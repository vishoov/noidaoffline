//import express 
const express = require('express');

//create an express app
const app = express();

//define a port 
const PORT = 3000;
// http://localhost:3000/

app.use(express.json());
// express.json -> request json -> parse 

//app -> is an instance of express application

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
app.post('/addTodo', (req, res)=>{
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
app.get("/readTodo", (req, res)=>{
    res.send(todos);
})



//updateTodo -> id, status update 
app.put("/updateTodo", (req, res)=>{
    const id = req.body.id;

    todos.map((task)=>{
        if(task.id===id){
            task.status="completed"
        }
    })

    res.send(todos)
})


//ROUTES in express

//Routes are used to define the endpoints of the server
//Routes are used to handle the requests made to the server
//http://domain/route
//http://localhost:3000/{route}
//http://facebookserver.com/signup
//http://youtubeserver.com/search

//in an API call there are a few important things:
//1. URL -> Uniform Resource Locator -> address of the resource -:> ex. http://localhost:3000/route
//2. Method -> GET, POST, PUT, DELETE, PATCH
//3. Route -> endpoint of the resource
//4. Request -> data sent to the server
//5. Response -> data sent back to the client

//HTTP -> Request Response Cycle
//WITHOUT REQUEST THERE IS NO RESPONSE 

//document.addEventListener('click', ()=>{})
//app.method('route', callback)

//i want to make a /home route with GET method when a user visits it says welcome to home page
app.get('/home', (req, res)=>{
    res.send('Welcome to Home Page');
    //req-> request object -> contains information about the request made to the server
    //res -> response object -> contains information about the response sent back to the client
})


//i want to make a /about route with GET method when a user visits it says welcome to about page
//i want to make a /profile route with GET method when a user visits it says welcome to profile page

//i want to make a / route with GET method when a user visits it says welcome to root page







//create a port listener
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

//Port -> localhost:3000 -> port is a gateway to access the server
//port is the interface between the server and the outside world
//any request to the server will be made through the port
