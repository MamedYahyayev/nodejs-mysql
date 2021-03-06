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

router.get(
  "/edit-employee/:employeeId",
  employeeController.getEditEmployeePage
);

router.post("/edit-employee", employeeController.updateEmployee);

router.post("/delete-employee", employeeController.deleteEmployee);

router.get("/find-employee-by-salary", employeeController.findEmployeeBySalary);

router.get(
  "/find-employee-by-salary-between",
  employeeController.findEmployeeBySalaryBetween
);

router.get(
  "/find-employee-by-id-with-in-operator",
  employeeController.findEmployeeByIdWithInOperator
);

router.get(
  "/update-employee-by-surname",
  employeeController.updateEmployeeBySurname
);

router.get(
  "/delete-employee-by-salary-between",
  employeeController.deleteEmployeeBySalaryBetween
);

router.get(
  "/truncate-employee-table",
  employeeController.truncateEmployeeTable
);

router.get("/order-employee-by-name", employeeController.orderEmployeeByName);

router.get(
  "/group-employee-by-salary",
  employeeController.groupEmployeeBySalary
);

router.get("/count-employee", employeeController.countEmployee);

router.get("/max-salary-employee", employeeController.maxSalaryOfEmployee);

router.get("/min-salary-employee", employeeController.minSalaryOfEmployee);

router.get("/sum-salary-employee", employeeController.sumOfSalaryOfEmployee);

module.exports = router;
