const orm = require("../config/orm.js");



var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(burgerId, condition, cb) {
    orm.updateOne(burgerId, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;





