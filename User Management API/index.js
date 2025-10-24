const express = require('express');
const app = express();
const userRoutes = require('./view/user.routes')
app.use(express.json());



app.use(userRoutes)


//database connection code
const mongoose = require('mongoose')
const uri = "mongodb+srv://vverma971_db_user:YQur1HImAdcX11Uy@cluster0.exnq8ct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri)
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err.message))


//data base connection code ends here


app.get("/", (req, res)=>{
    res.send("Welcome to user management API")
})


app.listen(3000, ()=>{
    console.log("server is live on port 3000, http://localhost:3000")
})