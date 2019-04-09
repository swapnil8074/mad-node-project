const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const upload  = require("../utils/upload");

// get routes
router.get("/signup", authController.getSignup);
router.get("/login", authController.getLogin);


// router.post
router.post("/login", authController.postLogin);
router.post("/signup", upload.single('profilePic'),  authController.postSignup);
router.post('/reset', authController.postReset);


module.exports = router;
