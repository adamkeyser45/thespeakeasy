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
      recipe_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      optional_url: {
        type: DataTypes.STRING,
        validate: {
            isURL: true
          }
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false
      },
      creator: {
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
      modelName: 'post'
    }
);

module.exports = Recipe;