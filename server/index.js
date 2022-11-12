const express = require("express");
const mongoose = require("mongoose");
const EmployeeRoute = require("./routes/employeeRoute")
const GetAllEmployees = require("./routes/employeeRoute")
const getEmployeesById = require("./routes/employeeRoute")


require("dotenv").config()
const cors = require("cors")


const app = express();

app.use(cors())

app.use(express.json())

app.use("/employee", EmployeeRoute);
app.use('/', GetAllEmployees)
app.use("/", getEmployeesById)

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})



mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { 
    console.log('connected to database myDb ;)') 
})