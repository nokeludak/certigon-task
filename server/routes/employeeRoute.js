const { create, getAllEmployees, getEmployeesById, getActiveOrInactive, deleteEmployee } = require('../controllers/employeeController')

const router = require('express').Router()

router.post("/create", create)
router.get("/employees", getAllEmployees)
router.get("/employees/:id", getEmployeesById)
router.get("/employees/true/false", getActiveOrInactive)
router.delete("/employees/:id" , deleteEmployee)
module.exports = router