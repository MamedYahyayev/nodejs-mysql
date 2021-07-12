const Sequelize = require("sequelize");

const sequelize = new Sequelize("company_management", "mamed", "mamed2001", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
