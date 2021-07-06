const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "mamed",
  database: "company_management",
  password: "mamed2001",
});

module.exports = pool.promise();
