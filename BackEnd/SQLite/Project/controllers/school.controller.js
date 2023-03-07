const { School, Student, sequelize } = require("../models/index");

const createSchool = async (schoolName) => {
  const school = await School.create({
    name: schoolName,
  });

  return school;
};

const addStudent = async (studentObj, schoolName) => {
  const school = await School.findOne({ where: { name: schoolName } });

  if (!school) {
    return "There is no school with that name!";
  }

  try {
    const student = await Student.create(studentObj);
    await school.addStudent(student);
    return student;
  } catch (error) {
    return "There was an error:" + error;
  }
};

const updateSchool = async (schoolName, newName) => {
  const school = await School.findOne({ where: { name: schoolName } });

  school.name = newName;

  return "Successfully updated";
};

const updateStudent = async (studentName, name = null, age = null) => {
  const student = await Student.findOne({ where: { name: studentName } });

  try {
    student.name = name ?? student.name;
    student.age = age ?? student.age;
  } catch (error) {
    return "There was an error:" + error;
  }

  return "Successfully updated";
};

const getOneStudent = async (studentName) => {
  const student = await Student.findOne({ where: { name: studentName } });

  return student;
};

const getAllStudentsOf = async (schoolName) => {
  const school = await School.findOne({ where: { name: schoolName } });
  const students = await school.getStudents();

  return students;
};

module.exports = {
  createSchool,
  addStudent,
  updateSchool,
  updateStudent,
  getOneStudent,
  getAllStudentsOf,
};
