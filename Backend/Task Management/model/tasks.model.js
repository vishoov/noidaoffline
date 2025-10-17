//Schema? 
// a schema in mongoose maps to a mongoDB collection and defines the SHAPE of documents within that collection.


// Schemas provide structure to MongoDB's flexible document model while maintaining the benefits of NoSQL scalability

const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    // title
    title: {
        type:String, //the type of data we add in title is string
        required:true, //true -> mandatory field and false means optional field
        minLength:5, //minimum length 
        maxLength:50 //maximum length
    },
    // description
    description:{
        type:String,
        required:false,
        minLength:10,
        maxLength:1000
    },
    // priority
    priority:{
        type:String,
        enum:["low", "mid", "high"], //enum sets available values for this field
        required:true,
        default:"mid"

    },
    // status
    status:{
        type:String,
        enum:["completed","incomplete"],
        default:"incomplete",
        required:true
    },
    rating:{
        type:Number, 
        min:0,
        required:false
    }
},
{
    timestamps:true
})

//mongoose model syntax
// const ModelName = mongoose.model('collection_name', SchemaReference )

const Task = mongoose.model('tasks', taskSchema);

module.exports = Task;




// Client     ---Req------>   Server                ----URI---> Database
// Front End                   route handler            mongoose.connect promise
// fetch()                      >----------query-------------->
// React (JS)                   data---------Schema----------->                                        
//             <-----Res---------


// Route handler
//app.method('path', handler function)