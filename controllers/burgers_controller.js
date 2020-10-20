const express = require("express");

//Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});











module.exports = router;