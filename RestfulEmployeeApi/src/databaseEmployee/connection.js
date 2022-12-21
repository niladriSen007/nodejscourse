import mongoose  from "mongoose";
const connection = mongoose.connect("mongodb://localhost:27017/employees")
.then(()=>{
    console.log("Connection Successful");
}).catch(()=>{
    console.log("Connection is not succesful")
})

export { connection };