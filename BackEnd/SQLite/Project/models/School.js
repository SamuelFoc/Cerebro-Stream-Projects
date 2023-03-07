const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const School = sequelize.define("school", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = School;
