const express=require("express");
const app=express();
const port=process.env.PORT || 4000;
const student=require("./models/students");
require("./db/connection.js")
app.use(express.json());

//get all students data
app.get("/students",async(req,res)=>{
 try{
    const studentsData=await student.find();
    res.send(studentsData);
 }catch(err){
    res.send(err);
 }
});

//get individual student data
app.get("/students/:id",async(req,res)=>{

  try{
    const _id=req.params.id;
    const studentData=await student.findById(_id);
    if(!studentData){
      return res.status(404).send();
    }
    else{
      res.send(studentData);
    }
  }catch(err){
    res.send(err);
  }
});

//create a new students
app.post("/students",async(req,res)=>{
  try{
    const user=new student(req.body);
    const createUser=await user.save();
    res.status(201).send(createUser);
  }catch(err){
    res.status(400).send(err);
  }
});

//update student data
app.patch("/students/:id",async(req,res)=>{
  try{
     const _id=req.params.id;
     const updateStudents=await student.findByIdAndUpdate(_id,req.body,{
       new:true
     });
     res.send(updateStudents);  
  }catch(err){
    res.status(400).send(err);
  }
});

//delete student data
app.delete("/students/:id",async(req,res)=>{
  
  try{
    const _id=req.params.id;
    const deleteStudent=await student.findByIdAndDelete(_id);
    if(!_id){
      return res.status(400).send();
    }
   else{
    res.send(deleteStudent);
   } 
  }catch(err){
    res.status(500).send(err);
  }
});
app.listen(port,()=>{
  console.log(`Connection is setup at ${port}`);
});
