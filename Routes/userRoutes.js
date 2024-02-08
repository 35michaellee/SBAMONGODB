
const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');


//User route handler
router.get('/', (req, res) => {
  res.send('Welcome to users');
});

router.get("/getAllUsers", userController.getAllUsers);
router.post("/resetAllUsers", userController.resetAllUsers);


module.exports = router;