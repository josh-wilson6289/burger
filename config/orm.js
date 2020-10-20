const connection = require("./connection.js");

//create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// `selectAll()`
// `insertOne()`
// `updateOne()`

const orm = {
  selectAll: function(cb) {
    let queryString = `SELECT * FROM burgers;`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(burger, cb) {
    let queryString = `INSERT INTO burgers (burger_name) VALUES ('${burger}');`
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function(burgerId, condition, cb) {
    let queryString = `UPDATE burgers SET devoured = ${condition} WHERE ${burgerId} = id;`
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};



module.exports = orm;