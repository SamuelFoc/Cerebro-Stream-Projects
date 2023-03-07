const Sequelize = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./mydb.sqlite",
  logging: false,
});

module.exports = sequelize;
