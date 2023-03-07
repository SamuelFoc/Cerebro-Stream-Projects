const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
});

User.sync();

module.exports = User;
