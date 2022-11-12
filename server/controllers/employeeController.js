const Employee = require("../models/employeeModel");

// CREATE EMPLOYEE

const create = async (req, res, next) => {
  const newEmployee = new Employee({
    name: req.body.name,
    lastName: req.body.lastName,
    department: req.body.department,
    country: req.body.country,
    address: req.body.address,
    active: req.body.active,
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

// GET ALL EMPLOYEES
const getAllEmployees = async (req, res, next) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json(error);
    }
  };
// GET EMPLOYEE BY ID
  const getEmployeesById = async (req, res, next) => {
    try {
      const employees = await Employee.findById(req.params.id);
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const getActiveOrInactive = async (req, res, next) => {
   try {
      const employees = await Employee.find({
        'active': true
      });
      
        res.status(200).json(employees);
    
     
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const deleteEmployee = async (req, res, next) => {
    try {
      const employees = await Employee.findByIdAndRemove(req.params.id)
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json(error);
    }
  }

module.exports = { create, getAllEmployees, getEmployeesById, getActiveOrInactive, deleteEmployee }
