const jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    req.user = decoded;

    next();
  } catch (err) {
    if (err.message === 'jwt malformed') {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    console.log(err.message);
    return res.status(401).json({ message: err.message });
  }
};
