const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const keys = require("../config/keys");

const opts = {}; // create an opts object
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // extract Bearer token form jwt generated token post authentication
opts.secretOrKey = keys.secretOrKey; // get the security key for the current user

module.exports = passport => {
  // export passport
  passport.use(
    // passport middleware takes JwtStrategy function as input
    new JwtStrategy(opts, (jwt_payload, done) => {
      // JwtStrategy function takes opts object as input which contains the Bearer token and security key and post comparision return the jwt_payload which we had passed as a part of token
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
