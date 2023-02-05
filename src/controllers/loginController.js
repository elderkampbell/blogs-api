const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const { type, message } = await loginService.loginValidation(email, password);

  if (type) return res.status(type).json({ message });

  const token = jwt.sign(message.dataValues, JWT_SECRET, { expiresIn: '10m', algorithm: 'HS256' });

  return res.status(200).json({ token });
};

module.exports = {
  loginValidation,
};
