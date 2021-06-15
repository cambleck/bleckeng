const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("User");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        res.status(401);
        res.end(info.message);

        return;
      }
      if (!user || user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);
