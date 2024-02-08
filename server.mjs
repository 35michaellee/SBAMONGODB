import express from 'express';
import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import commentRoutes from './Routes/commentRoutes.js';
import bookRoutes from './Routes/bookRoutes.js';

// Load environment variables from .env file
dotenvConfig();

const app = express();

// Connect to MongoDB
// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));


app.get('/', (req, res) => {
  res.send('Welcome to Home Page ');
});


// Define middleware and route handlers
app.use(express.json());
app.use('/users', userRoutes);
app.use('/books', bookRoutes);
app.use('/comments', commentRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});