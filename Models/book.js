const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, 
    minlength: 3,   
    maxlength: 100, 
  },
  author: {
    type: String,
    required: true, 
    minlength: 3,   
    maxlength: 50,  
  },
  genre: {
    type: String,
    enum: ['Fiction', 'Non-fiction', 'Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Romance'], // Genre must be one of the specified values
    required: true, // Genre is required
  },
 
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;