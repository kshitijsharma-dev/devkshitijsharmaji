const express= require ("express");

const app = express();

app.use("/",(req,res)=>{
    res.send ("hello from kshitij sharma$");
});

app.use("/hello",(req,res)=>{
    res.send ("hello from me$");
});

app.use("/test",(req,res)=>{
    res.send ("hello from server$");
});

 app.listen(3000,()=>{
    console.log("server is successfully listning on port 3000...");
 });