//Recipe holds drink concoctions created by the community.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      url: {
        type: DataTypes.STRING,
        validate: {
            isURL: true
          }
      },
      instructions: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredient1: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredient2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredient3: {
        type: DataTypes.STRING,
      },
      ingredient4: {
        type: DataTypes.STRING,
      },
      mixologist: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'recipe'
    }
);

module.exports = Recipe;