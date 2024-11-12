const express = require("express");
const URL = require("../model/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allurls = await URL.find({});
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
