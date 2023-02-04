module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: DataTypes.NUMBER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING
    });

  return User;
};
