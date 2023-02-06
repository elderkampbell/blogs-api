const { User, Category, BlogPost } = require('../models');

const getPosts = async () => {
  const BlogPosts = await BlogPost.findAll({ include: [
    {
      model: User,
      as: 'user',
    },
  {
    model: Category,
    as: 'categories',
  }],
});
  console.log(BlogPosts);
  return { type: null, message: BlogPosts };
};

module.exports = {
  getPosts,
};
