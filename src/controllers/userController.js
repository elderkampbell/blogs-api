const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const addUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { type, message } = await userService.addUser(displayName, email, password, image);
  if (type) return res.status(type).json({ message });

  const payload = {
    displayName,
    email,
    image,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return res.status(201).json({ token });
};

module.exports = {
  addUser,
};
