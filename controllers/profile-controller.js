var con = require("../config/config");

module.exports.profile = function(req, res) {
  var first_name = "testeret";
  var today = new Date();
  var name = req.body.username;
  var date = "test";

  console.log(name + "nameworking");

  var sqlp = "SELECT * FROM profile WHERE username = ? OR date= ?";
  var sqls = "SELECT * FROM survey WHERE username = ? OR first_name = ?";

  con.query(sqlp, [name, date], function(err, result1) {
    con.query(sqls, [name, first_name], function(err, result2) {
      if (err) throw err;
      console.log(name);
      res.render("profile", {
        user: result1,
        username: result2,
        name: req.body.username
      });
    });
  });
};
