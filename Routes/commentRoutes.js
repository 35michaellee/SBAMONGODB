const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/commentController');



router.get('/', (req, res) => {
    res.send('Welcome to Comments');
  });
  
module.exports = router;