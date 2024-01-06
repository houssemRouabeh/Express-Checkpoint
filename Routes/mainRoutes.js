const express = require("express");
const checkWorkingHours = require("../middlewares/checkWorkingHours ");
const router = express.Router();

router.use(checkWorkingHours);

router.route("/home").get((req, res, next) => {
  res.render("home");
});
router.route("/services").get((req, res, next) => {
  res.render("services");
});
router.route("/contact").get((req, res, next) => {
  res.render("contact");
});

module.exports = router;
