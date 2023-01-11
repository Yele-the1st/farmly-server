const express = require("express");
const usersController = require("../controllers/users");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// READ
router.get("/:id", isAuth, usersController.getUser);
router.get("/:id/friends", isAuth, usersController.getUserFriends);

// UPDATE
router.patch("/:id/:friendId", isAuth, usersController.addRemoveFriend);

module.exports = router;
