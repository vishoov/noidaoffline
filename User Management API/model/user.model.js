const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    //name
    name:{
        type:String,
        required:true,
        minLength:2, 
        maxLength:50
    },
    //email
    email:{
        type:String,
        required:true,
        unique:true
        //validate HW
    },

    //password
    password:{
        type:String,
        minLength:6,
        maxLength:30,
        required:true
    },

    //age
    age:{
        type:Number,
        min:10,
        max:100
    },

    //address
    address:{
        //locality
        locality:{
            type:String
        },
        //city
        city:{
            type:String,
        },
        //country
        country:{
            type:String
        }
    },
    //zipcode
    zipcode:{
        type:Number
    },

    //role
    role:{
        type:String,
        enum:["user", "admin", "superadmin"]
    }
},
{
    timestamps:true
})


const User = mongoose.model(
    "User",
    userSchema
)

module.exports = User;