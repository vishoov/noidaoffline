//import express 
const express = require('express');

//create an express app
const app = express();
const todoRoutes = require('./view/todo.view')
//define a port 
const PORT = 3000;
// http://localhost:3000/
const dynamic = require('./view/dynamic.view')


app.use(express.json());
// express.json -> request json -> parse 
app.use(todoRoutes)

//app -> is an instance of express application
app.use(dynamic)

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
//this is a static route this does not accept any parameter be it route param or query params
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
