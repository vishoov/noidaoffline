const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
//     id:string,
// 	Name:string,
// sellerId:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User"
// },
name:{
    type:String,
    required:true
},
// description:string,
description:{
    type:String,
    required:true
},
// Costprice:number,
costprice:{
    type:Number,
    required:true,
    min:0
},
// saleprice:number,
saleprice:{
    type:Number,
    required:true,
    min:0
},
// Category:string,
category:{
    type:String,
    enum:["electronics", "fashion"],
    default:"electronics"
},
// Stock:number,
stock:{
    type:Number,
    min:0,
    required:true
},
// image:[String] -> cdn links front end 
image:[
    {
        type:String
    }
]
// createdAt:date
},
{
    timestamps:true
})


const Product = mongoose.model("Product", productSchema)

module.exports = Product;