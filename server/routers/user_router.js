const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();
const user_controller = new UserController();

router.post("/signup", user_controller.register);
router.post("/signin", user_controller.login);

module.exports = router;
