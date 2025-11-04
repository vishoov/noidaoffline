const express = require("express")
const app = express();
const mongoose = require('mongoose')
const productRoutes = require("./view/product.routes")
const uri = "mongodb+srv://vverma971_db_user:Iygu1RXgKrPmhnJr@cluster0.tcnoggx.mongodb.net/?appName=Cluster0"
app.use(express.json())

const cartRoutes = require("./view/cart.routes")

mongoose.connect(uri)
.then(()=>{
    console.log("Connected to DB")
})
.catch((err)=>err.message)

app.use(cartRoutes)
app.use(productRoutes)
app.get("/", (req, res)=>{
    res.send("Welcome to ecommerce api")
})



app.listen(3000, ()=>{
    console.log("server connected on http://localhost:3000/")
})