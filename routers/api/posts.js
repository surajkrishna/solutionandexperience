const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

const Post = require("../../models/Post");

// @route   GET api/posts/test
// @des     Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts works!" }));

// Load Education Validation
const validatePostInput = require("../../validation/post");

// @route   POST api/posts
// @des     Create posts
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    if (!isValid) {
      //if any error, send json with errors
      erros = res.status(404).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    // Save to db
    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;
