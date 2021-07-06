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
