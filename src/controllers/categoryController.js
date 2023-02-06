const categoryService = require('../services/categoryService');

const addCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const { type, message } = await categoryService.addCategory(name);
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  addCategory,
};
