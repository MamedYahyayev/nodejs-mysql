const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// routes
const indexRoutes = require("./routes/index");
const employeeRoutes = require("./routes/employee");

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

sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => console.log(`app listening on port ${port}`));
  })
  .catch((err) => console.log(err));
