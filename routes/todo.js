const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");


router.get('/', todoController.index);
router.post('/save', todoController.save);



module.exports = router;