const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;