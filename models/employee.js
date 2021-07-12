const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Employee = sequelize.define("employees", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: DataTypes.STRING(40),
  surname: DataTypes.STRING(40),
  salary: DataTypes.DECIMAL(6, 2),
  description: DataTypes.STRING(200),
  imageUrl: DataTypes.TEXT,
});

module.exports = Employee;