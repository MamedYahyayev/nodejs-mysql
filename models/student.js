const sequelize = require("../utils/database");
const { Model, DataTypes, Sequelize } = require("sequelize");

class Student extends Model {}

Student.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING(30),
    surname: DataTypes.STRING(30),
    age: DataTypes.TINYINT,
    registeredDate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      comment:
        "this is registered date, if user doesn't send time, value will be current time",
    },
    commentMe: {
      type: DataTypes.STRING,
      comment: "This is a comment column",
    },
  },
  {
    sequelize,
    modelName: "student",
    freezeTableName: true, // this will not pluralize the model name, default: false
    timestamps: true, // if it is false then this will not add createdAt and updatedAd columns, default: true
    createdAt: false, // this will not add createdAt column
    updatedAt: "update", // this will add updatedAt column with the name 'update'
  }
);

module.exports = Student;
