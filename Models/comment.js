
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: String,
  // Add other fields as needed
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;