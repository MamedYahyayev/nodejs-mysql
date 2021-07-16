const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Address = sequelize.define("address", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  country: DataTypes.STRING(20),
  homeAddress: DataTypes.STRING(200),
  zipCode: DataTypes.CHAR(5),
});

module.exports = Address;