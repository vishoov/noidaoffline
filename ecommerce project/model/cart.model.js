const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
//     Id:string,
// userID:string,
userID:{
    type:String,
    required:true
},
products:[
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        quantity:{
            type:Number, 
            required:true,
            min:[1, "Quantity must be atleast one"]
        }
    },
],
totalAmount:{
    type:Number,
    required:true,
    min:[0, "Total amount cannot be negative"]
}
// Products:[{
// productId: string,
// Price:number,
// quantity:number	
// }],
// totalAmount:number

}, {
    timestamps:true
})


const Cart = mongoose.model("Cart", cartSchema)


module.exports = Cart