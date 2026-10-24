import mongoose from "mongoose";

const todoschema=new mongoose.Schema({
    "title":{
        type:String
    },
    "description":{
        type:String
    },
    "completed":{
        type:Boolean,
        default:false
    }
},
{
    update:{
        createdAt:true,
        updatedAt:true
    }
})

const todoModel= mongoose.model("todos",todoschema)

export default todoModel