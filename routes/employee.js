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

module.exports = router;
