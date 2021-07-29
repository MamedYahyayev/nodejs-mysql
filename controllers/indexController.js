const { Op } = require("sequelize/types");
const Department = require("../models/department");

exports.getIndexPage = (req, res, next) => {
  res.render("index", { path: "/", pageTitle: "Home" });
};

exports.getTestPage = (req, res, next) => {
  res.render("test", { path: "/test", pageTitle: "Test" });
};

exports.createDepartment = (req, res, next) => {
  return Department.create({ name: "Department A" }).then((result) => {
    Department.findAll({ attributes: ["name"], where: { id: 1 } }).then(
      (departments) => {
        res.render("test", {
          pageTitle: "Test",
          path: "/test",
          departments,
        });
      }
    );
  });
};

exports.selectQueryWithAnd = (req, res, next) => {
  return Department.create({ name: "Department A" }).then((result) => {
    Department.findAll({
      where: {
        [Op.and]: [{ id: 1 }, { name: "Deparment A" }],
      },
    }).then((departments) => {
      res.render("test", {
        pageTitle: "Test",
        path: "/test",
        departments,
      });
    });
  });
};

exports.selectQueryWithOr = (req, res, next) => {
  return Department.create({ name: "Department A" }).then((result) => {
    Department.findAll({
      where: {
        [Op.or]: [{ id: 1 }, { name: "Deparment A" }],
      },
    }).then((departments) => {
      res.render("test", {
        pageTitle: "Test",
        path: "/test",
        departments,
      });
    });
  });
};

// https://sequelize.org/master/manual/model-querying-basics.html#operators