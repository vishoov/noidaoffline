//import express 
const express = require('express');

//create an express app
const app = express();

//express route 
app.get("/", (req, res)=>{
    res.send("Hello World");
})
//define a port 
const PORT = 3000;
// http://localhost:3000/


//create a port listener
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})
