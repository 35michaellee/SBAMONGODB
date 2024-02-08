const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');




router.get('/', (req, res) => {
    res.send('Welcome to Books');
  });

router.post('/createBook', bookController.createBook);

router.get('/getAllBooks', bookController.getAllBooks);
 
  
  
module.exports = router;