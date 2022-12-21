import mongoose  from "mongoose";
import validator from "validator";

const employeeSchema = mongoose.Schema({
    empId:{
        type:Number,
        required:true,
        unique:true,
        minlength:1
    },
    empName:{
        type:String,
        required:true,
        minlength:5
    },
    empEmail:{
        type:String,
        required:true,
        unique:true,
        validate(email)
        {
            if(!validator.isEmail(email))
            {
                throw new Error("Invalid Email,please enter a valid email id.")
            }
        }
    },
    empPhone:{
        type:Number,
        required:true,
        unique:true,
        minlength:10,
        maxlength:12
    },
    empAddress:{
        type:String,
        required:true
    }
})

const EmployeeDetails = new mongoose.model("Employee",employeeSchema);

export { EmployeeDetails }