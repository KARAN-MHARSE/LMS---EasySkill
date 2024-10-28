const express = require("express");
const router = express.Router();
const { googleLoginCallBack } = require("../controllers/auth.controller");
const passport = require("passport");

router
  .route("/google")
  .get(passport.authenticate("google", { scope: ["profile", "email"] }));

router
  .route("/google/callback")
  .get(
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      // Redirect to a protected route after login
      res.redirect("/");
    }
  );

module.exports = router;
