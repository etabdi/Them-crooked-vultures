var connection = require("../config/config");
var zomato = require("zomato-api");
var client = zomato({
  userKey: "967e2e08ce22588b1668ae3b432bf765 "
});

module.exports.survey = function(req, res) {
  var today = new Date();
  var survey = {
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    origin: req.body.origin,
    destination: req.body.destination,
    begintrip: req.body.begintrip,
    created_at: today,
    updated_at: today
  };

  console.log(survey + "survey is responding");
  connection.query("INSERT INTO survey SET ?", survey, function(
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
      res.render("surveyplan", { user: req.body.username });

      client.getCategories(null, function(err, result) {
        if (!err) {
          console.log(result);
          res.render("surveyplan", { destination: req.body.destination });
        } else {
          console.log(err);
        }
      });
    }
  });
};
