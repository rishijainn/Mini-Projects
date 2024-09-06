const express=require("express");
const{getData,postData,updateData,deleteData}=require("../controllers/task");

const router=express.Router();

router.get('/getData',getData);

router.post('/postData',postData);

router.patch('/updateData',updateData);

router.delete('/deleteData',deleteData);

module.exports=router;

