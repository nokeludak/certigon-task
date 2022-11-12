const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    development: {
        id:0,
        employees:{
            employee: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Employee',
        },   
    },
    hr: {
        id:1,
        employees:{
            employee: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Employee',
        },   
    },
    menagment: {
        id:2,
        employees:{
            employee: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Employee',
        },   
    },
});

module.exports = mongoose.model("Department", departmentSchema);
