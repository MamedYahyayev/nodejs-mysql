const { Op } = require("sequelize");

const Employee = require("../models/employee");
const Address = require("../models/address");

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
    .then((result) => {
      const empId = result.dataValues.id;
      return Address.create({
        country: "Germany",
        homeAddress: "Berlin",
        zipCode: "1234",
        employeeId: empId,
      });
    })
    .then(() => {
      console.log("===> Employee and Address Inserted");
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

exports.findEmployeeBySalary = (req, res, next) => {
  return Employee.findAll({
    where: {
      salary: {
        [Op.gt]: 1000,
      },
    },
  })
    .then((employees) => {
      console.log("find Employee by salary: ", employees);
      res.render("employees", {
        pageTitle: "Employees",
        path: "/employees",
        employees: employees,
      });
    })
    .catch((err) => console.error(err));
};

exports.findEmployeeBySalaryBetween = (req, res, next) => {
  return Employee.findAll({
    where: {
      salary: {
        [Op.between]: [1000, 1500],
      },
    },
  })
    .then((employees) => {
      console.log("find Employee by salary between: ", employees);
      res.render("employees", {
        pageTitle: "Employees",
        path: "/employees",
        employees: employees,
      });
    })
    .catch((err) => console.error(err));
};

exports.findEmployeeByIdWithInOperator = (req, res, next) => {
  return Employee.findAll({
    where: {
      id: [1, 2, 3],
    },
  })
    .then((employees) => {
      console.log("find Employee by id with in operator: ", employees);
      res.render("employees", {
        pageTitle: "Employees",
        path: "/employees",
        employees: employees,
      });
    })
    .catch((err) => console.error(err));
};

exports.updateEmployeeBySurname = (req, res, next) => {
  return Employee.update(
    { surname: "Zakirov" },
    {
      where: {
        surname: "dsadas",
      },
    }
  )
    .then((employee) => {
      console.log("update employee by surname: ", employee);
      res.redirect("/employees");
    })
    .catch((err) => console.error(err));
};

exports.deleteEmployeeBySalaryBetween = (req, res, next) => {
  return Employee.destroy({
    where: {
      salary: {
        [Op.between]: [1200, 1500],
      },
    },
  })
    .then((employee) => {
      console.log("delete employee by salary between: ", employee);
      res.redirect("/employees");
    })
    .catch((err) => console.error(err));
};

exports.truncateEmployeeTable = (req, res, next) => {
  return Employee.destroy({ truncate: true })
    .then((employee) => {
      console.log("truncate employee table: ", employee);
      res.redirect("/employees");
    })
    .catch((err) => console.error(err));
};



// https://sequelize.org/master/manual/model-querying-basics.html#ordering-and-grouping