const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const router = express.Router();

const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
// @route   GET api/posts/test
// @des     Tests posts route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Posts works!" }));

// Load Education Validation
const validatePostInput = require("../../validation/post");

// @route   GET api/posts
// @des     Get posts
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: "No posts found" }));
});

// @route   GET api/posts/:postId
// @des     Get post by postid
// @access  Public
router.get("/:postId", (req, res) => {
  Post.findById(req.params.postId)
    .then(post => {
      res.json(post);
    })
    .catch(err =>
      res.status(404).json({ nopostfound: "No post found with given id" })
    );
});

// @route   DELETE api/posts/:postId
// @des     Delete post by postid
// @access  Private
router.delete(
  "/:postId",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.postId).then(post => {
        // Check for post owner
        if (post.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }

        //Delete
        post.remove().then(() => res.json({ success: true }));
      });
    });
  }
);

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
      return res.status(404).json(errors);
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

// @route   POST api/posts/like/:id
// @des     Like post
// @access  Private
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (
            post.likes.filter(likes => likes.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this post" });
          }

          //Delete
          post.likes.unshift({ user: req.user.id });
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/unlike/:id
// @des     Unlike post
// @access  Private
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id)
        .then(post => {
          // Check for post owner
          if (
            post.likes.filter(likes => likes.user.toString() === req.user.id)
              .length === 0
          ) {
            return res
              .status(400)
              .json({ notlike: "You have not yet liked this post" });
          }

          //Get the remove index
          const removeIndex = post.likes
            .map(items => itmes.user.toString())
            .indexOf(res.user.id);

          // Remove like
          post.likes.splice(removeIndex, 1);
          // Save post
          post.save().then(post => res.json(post));
        })
        .catch(err => res.status(404).json({ nopostfound: "No post found" }));
    });
  }
);

// @route   POST api/posts/comment/:id
// @des     Add a comment to post
// @access  Private
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 wtih erros object
      return res.status(400).json(erros);
    }

    Post.findById(req.params.id).then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
      };

      // Add to cmments array
      post.comments.unshift(newComment);

      // Save
      post.save().then(post => res.json(post));
    });
  }
);

// @route   Delete api/posts/comment/:id/:comment_id
// @des     Remove a comment from post
// @access  Private
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Post.findById(req.params.id)
      .then(post => {
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(404)
            .json({ commentnotexits: "Comment does not exist" });
        }
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        post.comments.splice(removeIndex, 1);

        // Save
        post.save().then(post => res.json(post));
      })
      .catch(err =>
        res.status(404).json({ nopostfound: "No post found with given id" })
      );
  }
);

module.exports = router;
