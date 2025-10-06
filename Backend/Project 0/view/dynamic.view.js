const express = require('express');
const router = express.Router();

const products = [
    {
        id:1,
        title:"iphone"
    },
    {
        id:2,
        title:"macbook"
    }
]

//Route parameter
router.get('/name/:id', (req, res)=>{
    let { id } = req.params;
    id=parseInt(id)
    const product = products.filter(prod=>prod.id === id)
    console.log(product)
    const title = product[0].title
    console.log(title)
    res.send(title)

})


//signup post welcome to signup page

router.post("/signup", (req, res)=>{
    res.send("Welcome to the signup page")
})



//get /product/:name -> route param = name -> the name of product you entered is :name
router.get("/products/:name", (req, res)=>{
    const name = req.params.name;

    res.send(name)
})


//get /search -> query parameter = search_query -> search results : 
router.get("/search", (req, res)=>{
    const q = req.query.search_query;

    res.send(q)
})

//Query Parameter
router.get('/search', (req, res)=>{
    const query = req.query.q;

    res.send("Query you searched for : ", query)


})


module.exports = router;

//post /signup welcome to the signup page static route