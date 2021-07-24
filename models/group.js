const sequelize = require("../utils/database");
const { DataTypes } = require("sequelize");

const Group = sequelize.define("group", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: DataTypes.STRING(40),
});

module.exports = Group;
