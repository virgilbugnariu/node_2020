'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      models.User.hasOne(models.Profile, { foreignKey: 'userId' });
      models.User.hasMany(models.Post, { foreignKey: 'userId'});
    }
  };
  User.init({
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};


