const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Example: Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Example: Add a new user
router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.json({ message: 'User created successfully' });
});

module.exports = router;
