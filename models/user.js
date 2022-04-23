'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull:false
    },
    email: {
      type:DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    mobile: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    otp: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};