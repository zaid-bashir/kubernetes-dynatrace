// index.js
const express = require("express");
const app = express();

app.use(express.json());

let users = [];

// Get route to retrieve all users
app.get("/getUsers", async (req, res) => {
  const response = await fetch("https://fakestoreapi.in/api/products");
  if (response.status == 200) {
    users = await response.json();
    res.json({
      message: "Users retrieved successfully",
      users: users,
    });
  } else {
    res.json({
      message: "Some Error Occured",
      users: users,
    });
  }
});

// Post route to add a new user
app.post("/postUser", (req, res) => {
  const response = fetch("https://fakestoreapi.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "Thala@seven.com",
      username: "MSDhoni",
      password: "@2011WC",
      name: {
        firstname: "Mahendra Singh",
        lastname: "Dhoni",
      },
      address: {
        city: "Rachi",
        street: "Local Boy",
        number: "7777777",
        zipcode: "7777",
        geolocation: {
          lat: 77.77777,
          long: 77.77777,
        },
      },
      phone: "777777777",
    }),
  });

  if (response.status == 201 || response.status == 200) {
    const user = response.json();
    users.push({
      message: "User added successfully",
      user: user,
    });
    res.status(201).json({ message: "User added successfully", user });
  } else {
    res.status(500).json({ message: "Some Error Occured", users: [] });
  }
});

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
