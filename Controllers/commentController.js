const Comment = require('../Models/comment.js');

// Controller function to create a new comment
exports.createComment = async (req, res) => {
    try {
        // Extract comment data from request body
        const { bookId, userId, content } = req.body;

        // Create a new comment instance
        const newComment = new Comment({
            book: bookId,
            user: userId,
            content,
        });

        // Save the comment to the database
        await newComment.save();

        // Send success response
        res.status(201).json({ message: 'Comment created successfully', comment: newComment });
    } catch (error) {
        // Handle errors
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to get all comments
exports.getAllComments = async (req, res) => {
    try {
        // Query the database to fetch all comments
        const comments = await Comment.find();

        // Send success response with the list of comments
        res.status(200).json({ comments });
    } catch (error) {
        // Handle errors
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};