const sequelize = require("../utils/database");
const { Model, DataTypes } = require("sequelize");

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING(30),
    surname: DataTypes.STRING(30),
    age: DataTypes.TINYINT,
  },
  {
    sequelize,
    modelName: "students",
  }
);

module.exports = Student;
