const taskModel=require("../model/taskModel");

const getData = async(req,res)=>{
    try{
        const allData=await taskModel.find({});
        if(allData){
            return res.status(200).json({
                success:true,
                message:"get request resolved successfully",
                data:allData
            })
        }
    }catch(error){
        return res.status(404).json({
            success:false,
            message:"the data not found"
        })
    }
}

const postData=async(req,res)=>{
    const {task}=req.body;
    

    try{
        if(task){
            const user=await taskModel.create({task:task});
            return res.status(200).json({
                success:true,
                message:"data posted successfully"
            })
        }
    }catch(error){
        return res.status(400).json({
            success:false,
            message:"there is some error in create new task"
        })
    }
}

const updateData=async(req,res)=>{
    const {prevTask,updatedTask,status}=req.body;
    const UpData=await taskModel.findOneAndUpdate({task : prevTask},{task:updatedTask,status:status},{new:true});
    return res.status(200).json({
        success:true,
        message:"done ji change ho gaya",
        data: UpData
    })
}

const deleteData=async(req,res)=>{
    const {task}=req.body;

    const delData=await taskModel.deleteOne({task:task},{new:true});
    return res.status(200).json({
        success:true,
        message:"deleted successfully"
    })

}

module.exports={getData,postData,updateData,deleteData}