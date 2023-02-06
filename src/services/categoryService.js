const { Category } = require('../models');

const addCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return { type: null, message: newCategory };
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return { type: null, message: categories };
};

module.exports = {
  addCategory,
  getCategories,
};
