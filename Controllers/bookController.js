const Book = require('../Models/book');



//tetsed example url http://localhost:3000/books/createBook/?{=&"title"= "The Great Gatsby",&"author"= "F. Scott Fitzgerald",&"genre"= "Fiction"&}=
const booksData = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic Literature' },
  { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-Age Fiction' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
  { title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  { title: 'The Chronicles of Narnia', author: 'C.S. Lewis', genre: 'Fantasy' },
  { title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure' },
];
//http://localhost:3000/books/createBook/?{ "title": "New Book", "author": "Author Name", "genre": "Fiction" }
exports.createBook = async (req, res) => {
    try {
      // Extract book data from request body
      const { title, author, genre } = req.body;
  
      // Create a new book instance
      const newBook = new Book({
        title,
        author,
        genre,
      });
  
      // Save the book to the database
      await newBook.save();
  
      // Send success response
      res.status(201).json({ message: 'Book created successfully', book: newBook });
    } catch (error) {
      // Handle errors
      console.error('Error creating book:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


exports.getAllBooks = async (req, res) => {
    try {
        // Query the database to fetch all books
        const books = await Book.find();

        // Send success response with the list of books
        res.status(200).json({ books });
       
    } catch (error) {
        // Handle errors
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.resetAllBooks = async (req, res) => {
    try {
       
        await Book.deleteMany({});
        
        for (const book of booksData) {
            const newBook = new Book(book);
            await newBook.save();
            console.log(`Book created: ${newBook.title}`);
        }
        res.status(200).send("Books reset successfully");
    } catch (error) {
        console.error('Error creating Books:', error);
        res.status(500).send("Failed to reset Books");
    }
};
exports.updateBook = async (req, res) => {
  try {
      const { id } = req.params;
      const { title, author, genre } = req.body;
      const updatedBook = await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
      res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
  } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
      const { id } = req.params;
      await Book.findByIdAndDelete(id);
      res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
  