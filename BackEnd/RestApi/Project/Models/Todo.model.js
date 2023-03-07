const { DataTypes } = require("sequelize");
const sequelize = require("../Database/database.config");

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  completed: {
    type: DataTypes.BOOLEAN,
  },
});

sequelize.sync();

module.exports = Todo;
