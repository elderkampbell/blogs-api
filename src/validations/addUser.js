const { addUserSchema } = require('./schemas');

const addUserValidation = (displayName, email, password) => {
  const { error } = addUserSchema.validate({ displayName, email, password });

  if (error) return { type: 400, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  addUserValidation,
};
