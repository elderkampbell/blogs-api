module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: {
        type: DataTypes.NUMBER,
        foreignKey: true
      },
      published: DataTypes.DATE,
      updated: DataTypes.DATE
    },
    {
      tableName: 'blog_posts',
    }
    );

    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    };

  return BlogPost;
};
