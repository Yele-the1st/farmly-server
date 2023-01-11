const express = require("express");
const { verify } = require("jsonwebtoken");
const postsController = require("../controllers/posts");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// CREATE
router.post("/", isAuth, postsController.createPost);

// READ
router.get("/", isAuth, postsController.getFeedPosts);
router.get("/:userId/posts", isAuth, postsController.getUserPosts);

// UPDATE
router.patch("/:id/like", isAuth, postsController.likePost);

module.exports = router;
