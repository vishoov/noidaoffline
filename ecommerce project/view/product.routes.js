const express = require('express')
const router = express.Router();
const Product = require("../model/product.mode")


// Create product /createproduct
router.post("/createProduct", async (req, res)=>{
    try{
        const data = req.body;

        const product = await Product.create(data);

        if(!product){
            res.send("Product not created")
        }

        res.json({
            message:"Product created successfully",
            product
        })
    }
    catch(err){
        res.send(err.message)
    }
})
// Fetch Product /product

router.get("/product", async (req, res)=>{
    try{
        const products = await Product.find();

        if(!products){
            throw new Error("product not found")
        }

        res.json({
            products
        })
    }
    catch(err){
        res.send(err.message)
    }
})

// Update Product /updateProduct
router.patch("/update/:id", async (req, res)=>{
    try{
        const id = req.params.id;
        const newprod = req.body;
        const product = await Product.findByIdAndUpdate(
            id,
            {
                saleprice:newprod.saleprice
            },
            {
                new:true
            }
        )

        if(!product){
            res.send("product not created")
        }

        res.json({
            product
        })
    }
    catch(err){
        res.status(500).send(err.message)
    }
})
// Delete Product /deleteProduct
router.delete("/delete/:id", async (req, res)=>{
    try{
        const _id = req.params.id;

        const product = await Product.findByIdAndDelete({_id});

        if(!product){
            res.send("Product couldnt be found")
        }

        res.json({
            message:"product deleted successfully",
            product
        })
    }
    catch(err){
        res.send(err.message)
    }
})

// Search /searchProduct
router.get("/search", async (req, res)=>{
    try{
    const { query } = req.query;

        const searchResults = await Product.find(
            {
                $or:[
                    
                        {
                        name: {
                            $regex:query, $options:'i' //casde sensitive
                        }
                    },
                      {  
                            description:{
                            $regex:query, $options:'i' //casde sensitive

                            }
                        } 
                    
                ]
            }
            
        )
        if(searchResults.length==0){
            res.send("No Products found")
        }

        res.json({
            searchResults
        })

    }catch(err){
        res.send(err.message)
    }
    
})


module.exports = router