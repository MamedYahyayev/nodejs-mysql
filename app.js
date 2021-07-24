const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// routes
const indexRoutes = require("./routes/index");
const employeeRoutes = require("./routes/employee");

// models
const Employee = require("./models/employee");
const Address = require("./models/address");
const Department = require("./models/department");
const Group = require("./models/group");

// sequelize
const sequelize = require("./utils/database");

// static files
app.use(express.static(path.join(__dirname, "public")));

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// view engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(indexRoutes);
app.use(employeeRoutes);

// database relations
Employee.hasOne(Address);
Address.belongsTo(Employee);
Department.hasMany(Employee);
Employee.belongsTo(Department);
Employee.belongsToMany(Group, {
  through: "employee_group",
  as: "employees",
  foreignKey: "employeeId",
});
Group.belongsToMany(Employee, {
  through: "employee_group",
  as: "groups",
  foreignKey: "groupId",
});

sequelize
  .sync({ force: true })
  .then((result) => {
    app.listen(port, () => console.log(`app listening on port ${port}`));
  })
  .catch((err) => console.log(err));
