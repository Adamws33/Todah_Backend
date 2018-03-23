'use strict';
module.exports = (sequelize, DataTypes) => {
  var campaign = sequelize.define('campaign', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    modified_date:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      timestamps: true,
      modifiedAt: true
    },
    created_date:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
      // timestamps: true,
      // createdAt: true
      //timestamp with timezone
    },
    project_img_thumb_url: {
      type: DataTypes.STRING,
      validate:{
        max:500
      }
    },
    creator_id:{
      type: DataTypes.STRING,
    },
    organization_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:150
      }
    },
    organization_ein: {
      type: DataTypes.STRING,
      validate:{
        max:50
      }
    },
    project_title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:150
      }
    },
    project_purpose:{
      type: DataTypes.STRING,
      allowNull: false,
      description: DataTypes.TEXT
    },
    project_website: {
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    project_image:{
      type: DataTypes.STRING,
      validate:{
        max:100
      }
//^ should be required - once functional 
    },
    finished_step_one:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    slider_inputs:{
      type: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    slider_ranges:{
      type: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    goal_currency:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:3
      }
    },
    goal:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true 
      }
    },
    finished_step_two:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    end_date:{
      type: DataTypes.STRING,
      validate:{
        isDate: true,
      }
    },
    is_published:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    funder_count:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    funded_amount_currency:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:3
      }
    },
    funded_amount:{
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true 
      }
    },
    project_video:{
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    project_short_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:150
      }
    },
    project_category_id: {
      type: DataTypes.INTEGER,
    },
    is_approved:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    initial_funds_currency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:3
      }
    },
    initial_funds: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        isDecimal: true 
      }
    },
    organization_chapter_name: {
      type: DataTypes.STRING,
      validate:{
        max:150
      }
    },
    organization_staff_name:{
      type: DataTypes.STRING,
      validate:{
        max:150
      }
    },
    external_payment_portal: {
      type: DataTypes.STRING,
      description: DataTypes.TEXT
    },
    is_personal_cause:{
      type: DataTypes.BOOLEAN,
    },
    project_beneficiary:{
      type: DataTypes.STRING,
      validate:{
        max:255
      }
    },
    campaign_slug:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:500
      }
    },
    never_event:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    project_role:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        max:255
      }
    },
    facebook_url:{
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    instagram_url:{
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    twitter_url:{
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    youtube_url:{
      type: DataTypes.STRING,
      validate:{
        max:200
      }
    },
    allow_cash_donations:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },    
    published_email_sent:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    client_is_paying_platform_fees:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    launch_date:{
      type: DataTypes.DATE(6),
      defaultValue: DataTypes.NOW
      // timestamps: true,
      // createdAt: true
      //time stamp with timezone
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