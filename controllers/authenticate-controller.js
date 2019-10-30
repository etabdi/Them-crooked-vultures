var Cryptr = require("cryptr");
var cryptr = new Cryptr("myTotalySecretKey");
var connection = require("../config/config");
var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var alert = require("alert-node");

module.exports.authenticate = function(req, res) {
  var username = req.body.username_r;
  var password = req.body.password_r;
  connection.query(
    "SELECT * FROM accounts WHERE username  = ?",
    [username],
    function(error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: "there are some error with query"
        });
      } else {
        if (results.length > 0) {
          var decryptedString = cryptr.decrypt(results[0].password);
          if (password == decryptedString) {
            res.render("example", { user: req.body.username_r });
            // console.log(username+ "chacking id working")
          } else {
            //  res.json({
            //    status: false,
            //    message: "Email and password does not match"
            //  });
            res.render("auth");
            alert("Email and password does not match");
          }
        } else {
          //  res.json({
          //    status: false,

          //    message: "User Name does not exits"
          //  });
          res.render("auth");
          alert("User name does not exits!");
        }
      }
    }
  );
};
