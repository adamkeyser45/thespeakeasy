//Mingle stores information about the various conversations, parties and tasting rooms that members can be a part of.

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mingle extends Model {}

Mingle.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'mingle'
    }
);

module.exports = Mingle;