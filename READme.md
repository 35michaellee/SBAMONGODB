# SBAMONGODB
Description:This project is a one-page React application with a backend implemented using Node.js and MongoDB. It allows users to interact with a collection of books, including creating new books, fetching all books, updating existing books, and deleting books. 

The frontend consists of components such as Header, Footer, and Article to structure the layout of the page and display information about each book. Navigation links are provided to allow users to easily navigate between different sections of the application. Styling is applied using CSS to enhance the visual appearance of the components.

On the backend, routes are implemented to handle different types of requests such as GET, POST, PATCH, and DELETE for interacting with the book data. Each route corresponds to a specific action, such as fetching all books, creating a new book, updating an existing book, or deleting a book from the database. MongoDB is used to store the book data, with Mongoose providing a convenient interface for interacting with the database from Node.js.

Overall, this project demonstrates the development of a full-stack web application using modern technologies such as React, Node.js, and MongoDB, showcasing how frontend and backend components can work together to provide a seamless user experience.
MOST OF THE ROUTES ARE FOR THE BOOKS
using examples 
post request for books http://localhost:3000/books/createBook/?{ "title": "New Book", "author": "Author Name", "genre": "Fiction" }