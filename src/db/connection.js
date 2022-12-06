const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
  console.log("Connection Successful");
}).catch((err)=>{
  console.log("Connection failed");
});