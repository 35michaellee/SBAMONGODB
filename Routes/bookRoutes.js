const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');




router.get('/', (req, res) => {
    res.send('Welcome to Books');
  });

router.post('/createBook', bookController.createBook);

router.get('/getAllBooks', bookController.getAllBooks);
router.post('/resetAllBooks', bookController.resetAllBooks
);
router.patch('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.deleteBook);

  
  
module.exports = router;