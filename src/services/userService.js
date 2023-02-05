const { User } = require('../models');
const UserValidation = require('../validations/addUser');

const addUser = async (displayName, email, password, image) => {
  const error = UserValidation.addUserValidation(displayName, email, password);

  if (error.type) return error;

  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) return { type: 409, message: 'User already registered' };
  
  const newUser = await User.create({ displayName, email, password, image });
  if (newUser) return { type: null, message: '' };
};

module.exports = {
  addUser,
};
