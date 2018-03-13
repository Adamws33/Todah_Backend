'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    uid:{
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: 128,
        min: {
          args: 5,
          msg: 'Password must have more than 5 characters and contain no spaces.'
        }
      }
    },
    last_login: {
      type: DataTypes.DATE(6),
      timestamps: true,
      modifiedAt: true
    },
    is_superuser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:30
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:30
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:30
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max: 75,
        isEmail: true,
      }
    },
    is_staff: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    date_joined: {
      type: DataTypes.DATE(6),
      timestamps: true,
      modifiedAt: true
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return users;
};