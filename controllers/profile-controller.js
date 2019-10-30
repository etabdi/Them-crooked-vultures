
var mysql = require('mysql');
var http = require('http');
var fs=require('fs');

var con = require("../config/config");

module.exports.profile = function(req, res) {
  var first_name = "testeret";
  var name = req.body.username;
  console.log(name + "nameworking");


  var sql = "SELECT * FROM survey WHERE username = ? OR first_name = ?";

  con.query(sql, [name, first_name], function(err, result) {
    if (err) throw err;
    console.log(name);
    res.render("profile", { username: result });
  });
};

