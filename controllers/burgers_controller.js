const express = require("express");

//Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

const burger = require("../models/burger.js");

// handlebars html route
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// api routes
router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertId });
  });
});










module.exports = router;