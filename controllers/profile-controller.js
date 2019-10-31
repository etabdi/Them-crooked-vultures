var con = require("../config/config");

module.exports.profile = function(req, res) {
  var first_name = "testeret";
  var today = new Date();
  var name = req.body.username;
  var date = "test";

  var profile = {
    username: req.body.username,
    date: req.body.date,
    flight: req.body.flight,
    hotel: req.body.hotel_inf,
    list: req.body.list,
    activity: req.body.activity,
    comment1: req.body.comment1,
    updated_at: today
  };

  console.log(name + "nameworking");

  var sqlp = "SELECT * FROM profile WHERE username = ? OR date= ?";
  var sqls = "SELECT * FROM survey WHERE username = ? OR first_name = ?";

  con.query("INSERT INTO profile SET ?", profile, function(
    error,
    results,
    fields
  ) {
    con.query(sqlp, [name, date], function(err, result1) {
      con.query(sqls, [name, first_name], function(err, result2) {
        if (err) throw err;
        console.log(name);
        res.render("profile", { user: result1, username: result2 });
      });
    });
  });
};
