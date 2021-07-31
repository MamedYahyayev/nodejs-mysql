const express = require("express");

const router = express.Router();

const indexController = require("../controllers/indexController");

router.get("/", indexController.getIndexPage);

// router.get("/test", indexController.createDepartment);

router.get("/test", indexController.selectQueryWithLike);

module.exports = router;
