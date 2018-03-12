'use strict';
module.exports = (sequelize, DataTypes) => {
  var campaign = sequelize.define('campaign', {
    orgname:{
      type: DataTypes.STRING,
      allowNull: false
    },
    chapname:{
      type: DataTypes.STRING,
    },
    staffname:{
      type: DataTypes.STRING,
    },
    camptitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    campcreatorrole:{
      type: DataTypes.STRING,
    },
    campcat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    camptease: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    camplongdesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origwebsite:{
      type: DataTypes.STRING,
    },
    campimg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addimg:{
      type: DataTypes.STRING,
    },
    facebook:{
      type: DataTypes.STRING,
    },
    twitter:{
      type: DataTypes.STRING,
    },
    instagram:{
      type: DataTypes.STRING,
    },
    youtube:{
      type: DataTypes.STRING,
    },
    campGoal:{
      type: DataTypes.INTEGER,
      allowNull: false,
      //will need to make sure this enters '' (empty) on innitial post
    },
    precampfunds:{
      type: DataTypes.INTEGER,
    },
    enddate:{
      type: DataTypes.STRING,
      allowNull: false,
      //will need to make sure this enters '' (empty) on innitial post
    },
    contributors:{
      type: DataTypes.INTEGER,
      allowNull: false,
      //will need to make sure this enters '' (empty) on innitial post
    },
    total:{
      type: DataTypes.INTEGER,
      allowNull: false,
      //will need to make sure this enters '' (empty) on innitial post
    },

  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return campaign;
};