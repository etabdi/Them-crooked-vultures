

var mysql = require('mysql');
var http = require('http');
var fs=require('fs');


var con = require("../config/config");


module.exports.profile = function(req, res) {
  var date = "test";
var username = req.body.name;
console.log(username+"nameworking")

var sql = 'SELECT * FROM profile WHERE username = ? OR date= ?';

con.query(sql, [username, date], function (err, result) {
  if (err) throw err;
  res.render('profile', { user: result})
});

  
}

