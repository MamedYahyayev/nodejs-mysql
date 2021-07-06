exports.getEmployeesPage = (req, res, next) => {
  res.render("employees", { pageTitle: "Employees", path: "/employees" });
};
