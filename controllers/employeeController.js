const Employee = require("../models/employee");

exports.getEmployeesPage = (req, res, next) => {
  Employee.findAll()
    .then((employees) => {
      res.render("employees", {
        pageTitle: "Employees",
        path: "/employees",
        employees: employees,
      });
    })
    .catch((err) => console.log(err));
};

exports.getAddEmployeePage = (req, res, next) => {
  res.render("add-employee", { pageTitle: "Add Employee", path: "/employees" });
};

exports.getEmployeeDetailsPage = (req, res, next) => {
  const employeeId = req.params.employeeId;
  const view = "employee-details";
  const pageTitle = "Employee Details";
  getEditOrDetailsEmployeePage(view, false, pageTitle, employeeId, res);
};

exports.getEditEmployeePage = (req, res, next) => {
  const employeeId = req.params.employeeId;
  const view = "edit-employee";
  const pageTitle = "Edit Employee";
  getEditOrDetailsEmployeePage(view, true, pageTitle, employeeId, res);
};

function getEditOrDetailsEmployeePage(viewFile, edit, pageTitle, id, res) {
  findEmployeeById(id)
    .then((employee) => {
      res.render(viewFile, {
        employee: employee,
        pageTitle: pageTitle,
        path: "/employees",
        editing: edit,
      });
    })
    .catch((err) => console.log(err));
}

exports.addEmployee = (req, res, next) => {
  const { name, surname, salary, description, imageUrl } = req.body;
  Employee.create({
    name,
    surname,
    salary,
    description,
    imageUrl,
  })
    .then(() => {
      console.log("===> Employee Inserted");
      res.redirect("/employees");
    })
    .catch((err) => console.log(err));
};

exports.updateEmployee = (req, res, next) => {
  const { name, surname, salary, description, imageUrl, employeeId } = req.body;
  findEmployeeById(employeeId)
    .then((employee) => {
      employee.id = employeeId;
      employee.name = name;
      employee.surname = surname;
      employee.salary = salary;
      employee.description = description;
      employee.imageUrl = imageUrl;
      return employee.save();
    })
    .then(() => {
      console.log("===> Employee Updated");
      res.redirect("/employees");
    })
    .catch((err) => console.log(err));
};

exports.deleteEmployee = (req, res, next) => {
  const employeeId = req.body.employeeId;
  Employee.destroy({
    where: {
      id: employeeId,
    },
  })
    .then(() => {
      console.log("===> Employee Deleted");
      res.redirect("/employees");
    })
    .catch((err) => console.log(err));
};

function findEmployeeById(employeeId) {
  return Employee.findOne({ where: { id: employeeId } });
}
