const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  console.log(req.user);

  res.render("pages/login", {
    user: req.user
  });
});

// router.post

module.exports = router;
