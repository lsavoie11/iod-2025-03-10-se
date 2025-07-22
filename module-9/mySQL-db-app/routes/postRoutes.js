const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getPosts);
router.post("/", postController.createPost);
router.post("/:id/like", postController.likePost);
router.post("/:id/comment", postController.commentPost);

module.exports = router;
