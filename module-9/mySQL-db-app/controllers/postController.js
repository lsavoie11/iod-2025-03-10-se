"use strict";
const Models = require("../models");

// Get all posts
const getPosts = (req, res) => {
  Models.Post.findAll({ include: Models.User })
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Create a post
const createPost = (req, res) => {
  Models.Post.create(req.body)
    .then((data) => res.send({ result: 200, data }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Like a post
const likePost = (req, res) => {
  Models.Post.increment("likes", { by: 1, where: { id: req.params.id } })
    .then(() => res.send({ result: 200, message: "Post liked!" }))
    .catch((err) => res.send({ result: 500, error: err.message }));
};

// Comment on a post (simple version: just logs, you can expand with a comments table/model)
const commentPost = (req, res) => {
  // For a real app, create a Comment model and save comments to DB
  res.send({ result: 200, message: "Comment added!", comment: req.body });
};

module.exports = { getPosts, createPost, likePost, commentPost };
