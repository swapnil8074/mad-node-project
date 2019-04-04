const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


// get routes
router.get("/signup", authController.getSignup);
router.get("/login", authController.getLogin);


// router.post
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);

module.exports = router;
