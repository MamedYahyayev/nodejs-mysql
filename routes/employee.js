const express = require("express");

const router = express.Router();

const employeeController = require("../controllers/employeeController");

router.get("/employees", employeeController.getEmployeesPage);

router.get("/add-employee", employeeController.getAddEmployeePage);

router.post("/add-employee", employeeController.addEmployee);

router.get(
  "/employee-details/:employeeId",
  employeeController.getEmployeeDetailsPage
);

router.get('/edit-employee/:employeeId', employeeController.getEditEmployeePage)

router.post('/edit-employee', employeeController.updateEmployee);

router.post('/delete-employee', employeeController.deleteEmployee);

module.exports = router;
