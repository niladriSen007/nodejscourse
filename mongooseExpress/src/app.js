import mongoose from "mongoose"
mongoose.connect("mongodb://localhost:27017/Niladri")
.then(()=> console.log("Connection Successful..."))
.catch((error) => console.log(error))

const employeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    Company:String,
    phone_no:Number,
    date:{
        type:Date,
        default:Date.now()
    }
})

const EmployeeDetails = new mongoose.model("Employee",employeeSchema);

//modern way to insert document,fields
const createDocument = async()=>{
    try{
        const emp1 = new EmployeeDetails({
    
            name:"Niladri",
            age:22,
            Company:"Microsoft",
            phone_no:8584071291
            })

            const emp2 = new EmployeeDetails({
    
                name:"Nil",
                age:21,
                Company:"Google",
                phone_no:8584071291
                })
        const emp3 = new EmployeeDetails({
    
                    name:"Punit",
                    age:22,
                    Company:"Microsoft",
                    phone_no:8584071291
                    })
            
            const result =await EmployeeDetails.insertMany([emp1,emp2,emp3]);
            console.log(result)
    }
    catch(error)
    {
        console.log(error);
    }
}

// createDocument();

const readDocument = async() =>{
    //comparison operator
    // const result = await EmployeeDetails.find({age: {$lt:25}});

    //logical operator
    const result = await EmployeeDetails.find({$and:[{age:{$lt:27}},{age:{$gt:21}}]});
    console.log(result);
}

readDocument();