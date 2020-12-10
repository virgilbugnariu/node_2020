'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      models.Profile.belongsTo(models.User, { foreignKey: 'userId' });
    }
  };
  Profile.init({
    userId: DataTypes.INTEGER,
    avatar: DataTypes.STRING,
    displayName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};