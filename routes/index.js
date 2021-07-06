const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index.ejs", { path: "/", pageTitle: "Home" });
});

module.exports = router;
