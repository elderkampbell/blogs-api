const { Category } = require('../models');

const addCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return { type: null, message: newCategory };
};

module.exports = {
  addCategory,
};
