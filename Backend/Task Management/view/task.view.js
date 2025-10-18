const express = require('express');

const router = express.Router();
const Task = require('../model/tasks.model')

console.log("outer")
//create a task
router.post('/createTask', async (req, res)=>{
    const data = req.body;

    //send this data to the database 

    // const savedData = await Task.create(data)

    const savedData = new Task(data);
    await savedData.save();



    res.json({
        message:"Task created",
        savedData
    })
})

//read tasks
router.get('/tasks', async (req, res)=>{
    const tasks = await Task.find();
    res.json({
        tasks
    })
})

//update Task

router.put("/updateTask/:id", async (req, res)=>{
    const id = req.params.id;
    const input = req.body;
    const data = await Task.findByIdAndUpdate(
        id,
        {
            $set:{
                status:input.status,
                title:input.title
            }},
        {
            new:true
        })
    res.json({
        data
    })
})
//findOneAndUpdate -> condition query find
//find a high priority task and update its status to completed

//delete a task
router.delete("/delete/:id", (req, res)=>{
    const id = req.params.id;

    res.send(`Task with id ${id}, deleted successfully`);
})

//search a task (optional)

router.get("/search", async (req, res)=>{
    const query = req.query.q;

    const data =await Task.find(
        {
            "title":query
        }
    )   

    res.json({
        data
    })
})

//find all incomplete tasks -> GET /incomplete 
router.get("/incomplete", async (req, res)=>{
    //we have to find tasks that are incomplete
    const data =await Task.find({
        "status":"incomplete"    })

    res.json({
        data
    })
})

// route parameter -> id = 
router.get('/findById/:id', async (req, res)=>{
    const id = req.params.id;

    const task = await Task.findOne({
        "_id":id
    });

    // const task = await Task.findById(id)

    res.json(task)

})

router.get('/priority/:p', async (req, res)=>{
    const priority = req.params.p;

    const data = await Task.find({
        "priority":priority
    })

    res.json({
        data
    })
});

router.get('/rating/:rt', async (req, res)=>{
    const { rt } = req.params;

    const data = await Task.find({
        rating: {
            $gt: rt
        }
    })

    res.json({
        data
    })
})

router.get("/multiple", async (req, res)=>{
    const inputstatus = "incomplete";
    const inputpriority = "high";

    const data = await Task.find({
        $or : [
            {
                status:inputstatus
            },
            {
                priority:inputpriority
            }
        ]
    })

    res.json({data})
})


//route to get tasks with priority either mid or high
router.get("/priorities", async (req, res)=>{
    const requirements =["mid", "high"]

    // const data = await Task.find({
    //     $or:[
    //         {
    //             priority:"high"
    //         },
    //         {
    //             priority:"mid"
    //         }
    //     ]
    // })

    const data = await Task.find({
        priority: {
            $in : requirements
        }
    })

    res.json({
        data
    })
})
// http://localhost:3000/tasks/pagination/1?limit=10
router.get('/pagination/:page/', async (req, res)=>{
    const limit = req.query.limit || 4;
    const {page} = req.params;
    const skip = (page-1) * limit

    const data = await Task.find().skip(skip).limit(limit);

    res.json({
        data
    })
})




module.exports = router;