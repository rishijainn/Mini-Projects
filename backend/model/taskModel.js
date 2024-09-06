const mongoose=require("mongoose");

const schema = new mongoose.Schema({
    task:{
        type:String,
    },
    status:{
        type:Boolean,
        required:true,
        default:false
    }
});

const taskModel=mongoose.model('tasks',schema);

module.exports=taskModel;