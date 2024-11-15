const express = require("express");
const {restrictTo}= require("../middlewares/auth");
const URL = require("../model/url");

const router = express.Router();

router.get("/",restrictTo(["NORMAL"]), async (req, res) => {
  if (!req.user) return res.redirect("/login");
  const allurls = await URL.find({createdBy: req.user._id});
  res.render("home", {
    urls: allurls,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
