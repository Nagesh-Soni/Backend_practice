const express = require("express");
const app = require("./src/app")
const port  = 5000;

app.use(express.json());

const employee = []

app.get("/" ,(req , res ) =>{
    res.send("My first API is Working !?")
})

app.post('/user' , (req , res )=>{
    console.log(req.body);  
    employee.push(req.body)
    console.table(employee);
    console.log(employee);
    
    
    if (!req.body ){
        res.send ("no employee")
    }

    else{ 
        res.status(201).json({
        message: "Employee added successfully",
        employee: employee
    });}
    
})

app.get('/user' , (req, res)=>{
    employee ? res.send(employee) : res.send("No Employee is there !")
})

app.patch('/user/:index' , (req , res) =>{
    const index = req.params.index;
    const role = req.body.role;
    employee[index].role = role 

    res.status(200) .json({
        message : "Employee updated  successfully !"
    })

})

app.delete('/user/:index' , (req , res) =>{
    const index = req.params.index;
    delete employee[index];

    res.status(200).json({
        message : "Employee deleted successfully"

    })
})



app.listen(port , ()=>{
    console.log(`Server is running on Port number ${port}`);
    
})