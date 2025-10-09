const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to user management apis')
});

app.use(express.json());
//json -> object-> parse
//object-> json -> stringify

const users = [
    {
        id:1,
        name:"Deepanshu",
        email:"deepanshu@gmail.com",
        password:"deepanshu123"
    }
]

// feature                         path                   method
// 1. signup                   /signup                      POST
app.post('/signup', (req, res)=>{
    const user = req.body;

    user.id=users.length+1;

    //add this object to the database 
    users.push(user);

    res.json({
        message:"User successfully signed up",
        user
    })
})


// 2. login                    /LOGIN                      POST
app.post('/login', (req, res)=>{
    const loginData = req.body;

    const user = users.find(u=>u.email===loginData.email);

    if(!user){
        return res.send("User not found")
    }

    if(user.password!==loginData.password){
         return res.send("Password incorrect")
    }

    res.json({
        message:"User logged in successfully",
        user
    })
})




// 3. logout                   /logout                     get
// 4. forgot password          /forgot                     POST
// 5. profile fetch            /profile/:id                GET
// 6. reset password           /reset                      PATCH
app.put('/resetpassword', (req, res)=>{
    const {
        email,
        oldpassword,
        newpassword
    } = req.body;

    const user = users.find(u=> u.email ===email);

    if(!user){
        return res.send("User not found");
    }

    if(user.password!==oldpassword){
        return res.send("Old password is incorrect")
    }

    user.password = newpassword;

    users.push(user);

    res.json({
        message:"Reset Password successfully",
        user
    })
})


// 7. update information       /update                     PUT


const PORT = 3000

app.listen(PORT, ()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
})