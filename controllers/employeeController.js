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
        editing: false,
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditEmployeePage = (req, res, next) => {
  const employeeId = req.params.employeeId;
  Employee.getEmployeeById(employeeId)
    .then(([employee]) => {
      res.render("edit-employee", {
        employee: employee[0],
        pageTitle: "Edit Employee",
        path: "/employees",
        editing: true,
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

exports.updateEmployee = (req, res, next) => {
  const { name, surname, salary, description, imageUrl, employeeId } = req.body;
  const employee = new Employee(
    employeeId,
    name,
    surname,
    salary,
    description,
    imageUrl
  );

  employee
    .updateEmployee()
    .then(() => res.redirect("/employees"))
    .catch((err) => console.log(err));
};

exports.deleteEmployee = (req, res, next) => {
  const employeeId = req.body.employeeId;
  Employee.deleteEmployeeById(employeeId)
    .then(() => res.redirect("/employees"))
    .catch((err) => console.log(err));
};
