// index.js
const express = require('express');
const app = express();

app.use(express.json());

let users = [];

// Get route to retrieve all users
app.get('/getUsers', (req, res) => {
  res.json({
    message: 'Users retrieved successfully',
    users: users
  });
});

// Post route to add a new user
app.post('/postUser', (req, res) => {
  const user = req.body;
  users.push({
    message: 'User added successfully',
    user: user
  });
  res.status(201).json({ message: 'User added successfully', user });
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
