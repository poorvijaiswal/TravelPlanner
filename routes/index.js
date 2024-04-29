var express = require('express');
var router = express.Router();

const userModel = require("./users");
const passport = require('passport');
const localStrategy = require("passport-local");
const City = require('../models/cities');

passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function (req, res, next) {
  res.render('index', {title: 'Travel Planner'});
});

router.get('/profile', isLoggedIn, function (req, res) {
  res.render('profile');
});

router.get('/search', async (req, res) => {
  const searchTerm = req.query.q;
  try {
    let cities = await City.find({
      city_name: { $regex: new RegExp(searchTerm, 'i') }
    });
    console.log(cities, "cities");
    // return res.json({ cities });
    res.json({cities});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while searching.' });
  }
});

//displaying a login page
router.get('/login', function (req, res, next) {
  res.render('loginpage', { title: 'Login' });
});

router.get('/register', function (req, res, next) {
  res.render('registerpage', { title: 'Register' });
});

router.post('/register', function (req, res, next) {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.pass_word,
  });

  userModel.register(userdata, req.body.password).then(function (registeredUser) {
    passport.authenticate("local")(req, res, function () {
      res.redirect('/login');
    })
  });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "profile",
  failureRedirect: "loginpage",
}));

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = router;
