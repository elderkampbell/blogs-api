const postService = require('../services/postService');

const getPosts = async (_req, res) => {
  const { message } = await postService.getPosts();

  res.status(200).json(message);
};

module.exports = {
  getPosts,
};
