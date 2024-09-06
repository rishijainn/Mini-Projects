const express=require("express");
require('dotenv').config();
const {connect}=require("./connection");
const router=require('./routes/taskRoutes');
const cors=require("cors");
const portNo = process.env.portNO;
const DbUrl=process.env.DbUrl;

const app=express();

//contecting server with the database
connect(DbUrl).then(()=>{
    console.log("server is connected with the database")
}).catch((error)=>{
    console.log("there is some issue in connecting the database ", error);
})

//middlewares
app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("hello its me rishi jain")
})

app.use('/todo',router);

//starting server on a specific port no 
app.listen(portNo,()=>{
    console.log("server started on port no ", portNo);
})