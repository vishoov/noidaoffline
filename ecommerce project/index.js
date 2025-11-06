const express = require("express")
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const cors = require('cors');

const uri = "mongodb+srv://vverma971_db_user:Iygu1RXgKrPmhnJr@cluster0.tcnoggx.mongodb.net/?appName=Cluster0"

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if(extname && mimetype){
        return cb(null, true);
    } else {
        cb(new Error("Only images are allowed"));
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5000000
    },
    fileFilter: fileFilter
});

app.post('/upload', (req, res) => {
    upload.single('photo')(req, res, (err) => {

        console.log("Route called")
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ 
                error: err.message,
                code: err.code 
            });
        } else if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        console.log(req.file);

        res.json({
            success: true,
            message: "Photo uploaded successfully",
            file: {
                filename: req.file.filename,
                originalname: req.file.originalname,
                path: req.file.path,
                size: req.file.size,
                mimetype: req.file.mimetype
            }
        });
    });
});

app.get("/", (req, res)=>{
    res.json({ message: "Welcome to ecommerce api" })
})

const productRoutes = require("./view/product.routes")
const cartRoutes = require("./view/cart.routes")

app.use('/api/cart', cartRoutes)
app.use('/api/products', productRoutes)

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

mongoose.connect(uri)
.then(()=>{
    console.log("Connected to DB")
})
.catch((err)=>console.log(err.message))

app.listen(3000, ()=>{
    console.log("server connected on http://localhost:3000/")
})
