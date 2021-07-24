const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Department = sequelize.define("department", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: DataTypes.STRING(40),
});

module.exports = Department;
