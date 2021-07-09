const Employee = require("../models/employee");

exports.getEmployeesPage = (req, res, next) => {
  Employee.getAllEmployees()
    .then(([rows, fieldData]) => {
      res.render("employees", {
        pageTitle: "Employees",
        path: "/employees",
        employees: rows,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getAddEmployeePage = (req, res, next) => {
  res.render("add-employee", { pageTitle: "Add Employee", path: "/employees" });
};

exports.getEmployeeDetailsPage = (req, res, next) => {
  const employeeId = req.params.employeeId;
  Employee.getEmployeeById(employeeId)
    .then(([employee]) => {
      res.render("employee-details", {
        employee: employee[0],
        pageTitle: "Employee Details",
        path: "/employees",
      });
    })
    .catch((err) => console.log(err));
};

exports.addEmployee = (req, res, next) => {
  const { name, surname, salary, description, imageUrl } = req.body;
  const employee = new Employee(
    null,
    name,
    surname,
    salary,
    description,
    imageUrl
  );
  employee
    .saveEmployee()
    .then(() => {
      res.redirect("/employees");
    })
    .catch((err) => console.log(err));
};
