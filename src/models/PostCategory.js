module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: {
        type: DataTypes.NUMBER,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.NUMBER,
        foreignKey: true
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
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
