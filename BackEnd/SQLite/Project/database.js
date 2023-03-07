const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydb.db",
  logging: false,
});

module.exports = sequelize;
