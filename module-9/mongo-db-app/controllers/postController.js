const Models = require("../models");

const createPost = (req, res) => {
  new Models.Post(req.body)
    .save()
    .then((post) => res.status(201).json(post))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const getPosts = (req, res) => {
  Models.Post.find()
    .populate("user", "username")
    .populate("comments.user", "username")
    .then((posts) => res.json(posts))
    .catch((err) => res.status(500).json({ error: err.message }));
};

const likePost = (req, res) => {
  Models.Post.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { likes: req.body.userId } },
    { new: true }
  )
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json({ error: err.message }));
};

const commentPost = (req, res) => {
  Models.Post.findByIdAndUpdate(
    req.params.id,
    { $push: { comments: { user: req.body.userId, text: req.body.text } } },
    { new: true }
  )
    .populate("comments.user", "username")
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json({ error: err.message }));
};

module.exports = { createPost, getPosts, likePost, commentPost };
