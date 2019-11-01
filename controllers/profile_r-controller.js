var Cryptr = require("cryptr");
var connection = require("../config/config");
var cryptr = new Cryptr("myTotalySecretKey");

module.exports.profile = function(req, res) {
  var today = new Date();
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

  console.log(profile + "profile is responding");
  connection.query("INSERT INTO profile SET ?", profile, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
      res.json({
        status: false,
        message: error
      });
    } else {
      // res.json({
      //   status: true,
      //   data: results,
      //   message: "user registered sucessfully"
      // });
      // res.redirect("/surveyplan");
      res.render("profile", { user: req.body.username });
    }
  });
};
