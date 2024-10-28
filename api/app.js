const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const User = require("./models/user.model");

// require routes
const authRoutes = require("./routes/auth.route");

// initiates routes
app.use("/auth", authRoutes);

// passport middleware
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_AUTH_KEY,
      clientSecret: process.env.GOOGLE_AUTH_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existedUser = await User.find({ email: profile.emails[0].value });
      if (existingUser) return done(null, existingUser);

      //   Create new user if not found
      const newUser = await User.create({
        name: profile.displayName,
        email: profile.emails[0].value,
        password: "123456",
        profilePicture: profile.photos[0].value,
      });
      console.log(newUser);
      done(null, newUser);
    }
  )
);

const port = process.env.PORT || 5050;
app.listen(port, console.log(`The server is listening on port ${port}`));
