const express = require("express");
const router = express.Router();
const authController  = require('../controllers/authController');

router.get("/login", (req, res) => {
  console.log(req.user);

  res.render("pages/login", {
    user: req.user
  });
});

// router.post
router.post('/login', authController.postlogin);
router.post('/signup', authController.postSignup);





module.exports = router;
