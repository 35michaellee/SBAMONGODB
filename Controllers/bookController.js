const Book = require('../Models/book');

// Controller function to create a new book

//tetsed example url http://localhost:3000/books/createBook/?{=&"title"= "The Great Gatsby",&"author"= "F. Scott Fitzgerald",&"genre"= "Fiction"&}=

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

  