const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
       return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
    {
      //Primary Information
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      //Secondary Information
      birthday: {
        type: DataTypes.DATEONLY,
      },
      favedrink: {
        type: DataTypes.STRING,
      },
      otherdrinks: {
        type: DataTypes.STRING,
      },
      about: {
        type: DataTypes.TEXT,
      },
      mingle_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
      hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
  );
  

module.exports = User;