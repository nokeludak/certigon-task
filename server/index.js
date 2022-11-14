const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeRoute = require("./routes/employeeRoute")
const GetAllEmployees = require("./routes/employeeRoute")
const getEmployeesById = require("./routes/employeeRoute")
const path = require("path")


require("dotenv").config()



const app = express();

app.use(cors())

app.use(express.json())


app.use('/', GetAllEmployees)
app.use("/", getEmployeesById)

__dirname = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"client/build")))

    app.get("*", ( req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build","index.html"))
    })
}else{
    app.get("/", (req,res)=>{
        res.send("server start")
    })
}


app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})


mongoose.connect(process.env.MONGO_URI || 3001, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, () => { 
    console.log('connected to database myDb ;)') 
})