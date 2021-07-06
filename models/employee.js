const db = require("../utils/database");

module.exports = class Employee {
  constructor(id, name, surname, salary, desc, imageUrl) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.salary = salary;
    this.description = desc;
    this.imageUrl = imageUrl;
  }

  static getAllEmployees() {
    return db.execute("select * from employees");
  }
};
