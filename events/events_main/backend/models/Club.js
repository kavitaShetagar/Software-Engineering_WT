const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://user:password@localhost:3306/database_name');  // Your MySQL database credentials

const Club = sequelize.define('Club', {
  // Define the club schema here
  heading: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.JSON,  // This will store the year and month as JSON
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  events: {
    type: DataTypes.JSON,  // Store events as JSON (or normalize to a separate table if needed)
    allowNull: false
  }
});

module.exports = Club;
