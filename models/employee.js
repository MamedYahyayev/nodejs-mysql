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

  static getEmployeeById(id) {
    return db.execute("select * from employees where id = ?", [id]);
  }

  saveEmployee() {
    return db.execute(
      "INSERT INTO employees (name, surname, salary, description, image_url) VALUES(?,?,?,?,?)",
      [this.name, this.surname, this.salary, this.description, this.imageUrl]
    );
  }

  updateEmployee() {
    return db.execute(
      "UPDATE employees SET name=?, surname=?, salary=?, description=? WHERE id=?",
      [this.name, this.surname, this.salary, this.description, this.id]
    );
  }

  static deleteEmployeeById(id) {
    return db.execute(
      "DELETE FROM employees WHERE id=?",
      [id]
    );
  }
};
