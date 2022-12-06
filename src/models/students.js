const mongoose=require('mongoose');
const validator=require('validator');
const studentSchema= new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 email:{
   type:String,
   required:true,
   unique:[true,"Email already exists"],
   validator(value){
    if(!validator.isEmail(value)){
       throw new Error("Invalid Email"); 
    }
   } 
 },
 phone:{
    type:String,
    min:10,
    required:true
 }
});

const Student=new mongoose.model('STUDENT',studentSchema);

module.exports=Student;