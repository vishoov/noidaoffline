const Cart = require('../model/cart.model')
const router = require('express').Router();
const Product = require("../model/product.mode")
// Add to cart
// Delete From Cart
// Fetch Cart

router.post("/addtoCart/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const { userId, quantity} = req.body;
        const product = await Product.findOne({_id});
        console.log(product)
        if(!product){
            throw new Error("Product with given ID doesnt exist")
        }

        const cart = await Cart.findOne({userID:userId})

        if(!cart){
            //create new cart and save it
            const newCart = await new Cart({
                userId,
                products:[
                    {
                    productId:_id,
                    quantity,
                    price:product.saleprice
                    }
                ],
                totalAmount:product.saleprice*quantity
            })

            return res.json({
                newCart
            })
        }else{
            // find the cart and add the product
            cart.products.push({
                productId:_id,
                quantity:quantity,
                price:product.saleprice
            })

            cart.totalAmount += product.saleprice * quantity
            await cart.save()

            res.json({
                cart
            })
        }
    }
    catch(err){
        res.send(err.message)
    }
})


router.delete('/delete/:id', async (req, res)=>{
    try{
        const _id = req.params.id;

        const { productId } = req.body;

        if(!productId){
            return res.status(400).send("Product id is required")
        }

        const cart = await Cart.findOne({_id});

        if(!cart){
            return res.send("Cart not found")
        }

        const productIndex = cart.products.findIndex(
            p=>p.productId.toString() === productId.toString()
        )

        if(productIndex===-1){
            return res.send("Product doesnt exist in cart")
        }

        cart.products.splice(productIndex, 1);

        cart.totalAmount = cart.products.reduce(
            (sum, item)=> sum+item.price*item.quantity, 0
        )

        await cart.save();

        return res.status(200).send({
            message:"Product Deleted Successfully",
            cart
        })


    }
    catch(err){
        res.send(err.message)
    }
})

module.exports = router