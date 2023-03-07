const sequelize = require("../database");

const Student = require("./Student");
const School = require("./School");

// Student Associations
Student.belongsTo(School);

// School Associations
School.hasMany(Student);

sequelize.sync();

module.exports = {
  sequelize,
  Student,
  School,
};
