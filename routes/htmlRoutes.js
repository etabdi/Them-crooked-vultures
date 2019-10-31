var mysql = require("mysql");
var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var authenticateController = require("../controllers/authenticate-controller");
var registerController = require("../controllers/register-controller");
var surveycontroller = require("../controllers/survey-controller");
var profileController = require("../controllers/profile-controller");
// var profile_sController = require("../controllers/profile_s-controller");

var con = require("../config/config");

module.exports = function(app) {
  app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true
    })
  );
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get("/controllers/main", function(req, res) {
    res.render("example", { username: req.username });

    // eslint-disable-next-line no-undef
    console.log(req.body.user + "cheking login");
  });

  app.get("/", function(req, res) {
    res.render("auth", { title: "Home", userData: req.user });

    console.log(req.user);
  });

  app.get("/controllers/profile-controller#!", function(req, res) {
    res.render("profile", { title: "survey", userData: req.user });

    console.log(req.user + "before survay");
  });

  app.get("/example", function(req, res) {
    res.render("example", { title: "survey", userData: req.user });

    console.log(req.user + "before survay");
  });
  app.get("/surveyplan", function(req, res) {
    res.render("surveyplan", { title: "Home", userData: req.user });

    console.log(req.user + "before survay");
  });

  console.log(authenticateController);

  app.post(
    "/controllers/authenticate-controller",
    authenticateController.authenticate
  );
  app.post("/controllers/register-controller", registerController.register);
  app.post("/controllers/profile-controller", profileController.profile);
  app.post("/controllers/survey-controller", surveycontroller.survey);
  // app.post("/controllers/profile_s-controller", profile_sController.profile);

  app.delete("/api/profile/:id", function(req, res) {
    con.query("DELETE FROM survey WHERE id = ?", [req.params.id], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });

  app.delete("/api/profile/:id", function(req, res) {
    con.query("DELETE FROM profile WHERE id = ?", [req.params.id], function(
      err,
      result
    ) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      } else if (result.affectedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    });
  });
};
