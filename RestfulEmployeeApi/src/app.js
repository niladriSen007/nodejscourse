import  express  from "express";
import { connection } from "./databaseEmployee/connection.js";
import { EmployeeDetails } from "./modelEmployee/employees.js";
import chalk from "chalk";
const app = express();
app.use(express.json());
const port = process.env.PORT || 7000;


//creating a new employee using async/await
app.post("/employees",async(req,res)=>{
    try{
        const employee = new EmployeeDetails(req.body);
        const employeeDetails = await employee.save();
        request.status(200).send(employe);
    }catch(e){
        res.status(400).send(e);
    }
})

//getting employees data
app.get("/employees",async(req,res)=>{
    try{
        const employees = await EmployeeDetails.find();
        res.status(200).send(employees);
    }catch(e){
        res.status(400).send(e);
    }
})


//getting indivitual employee details
app.get("/employees/:employeeId",async(req,res)=>{
    try{
        const employeeId = req.params.employeeId;
        const employee = await EmployeeDetails.findById({empId:employeeId}).sort();
        console.log(employee);
        res.status(200).send(employee);
    }catch(e){
        res.status(400).send(e);
    }
})


//update the employee field values
app.patch("/employees/:employeeId",async(req,res)=>{
    try{
        const employeeId = req.params.employeeId;
        console.log(employeeId);
        const employee = await EmployeeDetails.updateOne({empId:employeeId},req.body);
        console.log(employee);
        if(!student)
            {
                res.status(404).send();
                console.log(employee);
            }
            else{
                console.log(chalk.green(employee));
                res.status(200).send(employee);
                
            }
        
    }catch(e){
        res.status(400).send(e);
    }
})


//delte the specific employee
app.delete("/employees/:employeeId",async(req,res)=>{
    try{
        const employeeId = req.params.employeeId;
        const employee = await EmployeeDetails.deleteOne({empId:employeeId});
        console.log(employee);
        res.status(200).send(employee);
    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})
