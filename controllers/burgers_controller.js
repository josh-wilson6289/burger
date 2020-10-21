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

router.put("/api/burgers/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if(result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});










module.exports = router;