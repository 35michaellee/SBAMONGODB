const User = require('../Models/user');

// Controller function to create a new user
exports.createUser = async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, password } = req.body;

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            password,
        });

        // Save the user to the database
        await newUser.save();

        // Send success response
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // Handle errors
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to get all users
exports.getAllUsers = async (req, res) => {
    try {
        // Query the database to fetch all users
        const users = await User.find();

        // Send success response with the list of users
        res.status(200).json({ users });
    } catch (error) {
        // Handle errors
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.resetAllUsers = async (req, res) => {
    try {
        // Static array of user data
        await User.deleteMany({});
        const userData = [
            { username: 'BABYYYYY', email: 'user1@example.com', password: 'password1' },
            { username: 'why ', email: 'user2@example.com', password: 'password2' },
            { username: 'are ', email: 'user3@example.com', password: 'password3' },
            { username: 'not ,', email: 'user4@example.com', password: 'password4' },
            { username: 'resetting', email: 'user5@example.com', password: 'password5' },
            // Add more static entries as needed
        ];
        
        // Create users from schema model User
        for (const data of userData) {
            const newUser = new User(data);
            await newUser.save();
            console.log(`User created: ${newUser.username}`);
        }
        console.log("heyy im postig attempt ");
        res.status(200).send("Users reset successfully");
    } catch (error) {
        console.error('Error creating users:', error);
        res.status(500).send("Failed to reset users");
    }
};