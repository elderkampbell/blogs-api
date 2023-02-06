module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      post_id: {
        type: DataTypes.NUMBER,
        foreignKey: true
      },
      category_id: {
        type: DataTypes.NUMBER,
        foreignKey: true
      },
    },
    {
      tableName: 'Post_categories',
    }
    );

    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        as: 'posts',
        foreignKey: 'categoryId',
        otherKey: 'postId',
        through: PostCategory})

      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        foreignKey: 'postId',
        otherKey: 'categoryId',
        through: PostCategory})
      };
          
  return PostCategory;
};
