const express = require('express');
const router = express.Router();
const User = require('../model/user.model')

router.post("/signup", async (req, res)=>{
    const userData = req.body;

    // console.log(userData);
    const user = await User.create(userData)

    res.json({
        message:"User signed up successfully",
        user
    })
})

router.post('/login', (req, res)=>{
    const { email, password } = req.body;

    console.log(email, password);


    res.json({
        userData:{
            email,
            password
        }
    })
})

router.get('/users', (req, res)=>{
    res.send("These are the users")
})

router.get('/users/:id', (req, res)=>{
    const { id } = req.params;

    res.json({
        message:`This is the data for user with id: ${id}`
    })
})

module.exports = router;