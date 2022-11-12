const Department = require("../models/departmentSchema");

// CREATE EMPLOYEE

const create = async (req, res, next) => {
  const department = new Department({
    name: req.body.name,
    lastName: req.body.lastName,
    department: req.body.department,
    country: req.body.country,
    address: req.body.address,
  });
  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
    console.log(savedEmployee)
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
};


module.exports = { create, getAllEmployees, getEmployeesById }
