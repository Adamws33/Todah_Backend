'use strict';
module.exports = (sequelize, DataTypes) => {
  var logs = sequelize.define('logs', {}, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return logs;
};