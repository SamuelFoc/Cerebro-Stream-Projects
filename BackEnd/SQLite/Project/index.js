const controller = require("./controllers/school.controller");
const sequelize = require("./database");

sequelize.sync().then(async () => {
  // Create a new School
  const school = await controller.createSchool((schoolName = "MathSchool"));
  console.log("You just created a school: \n" + JSON.stringify(school) + "\n");

  // Create a few students
  const student1 = await controller.addStudent(
    {
      name: "Junior",
      age: 17,
    },
    "MathSchool"
  );
  console.log("You just added student: \n" + JSON.stringify(student1) + "\n");

  const student2 = await controller.addStudent(
    {
      name: "Senior",
      age: 37,
    },
    "MathSchool"
  );
  console.log("You just added student: \n" + JSON.stringify(student2) + "\n");

  // Get all student of the school to check if they were added
  const students = await controller.getAllStudentsOf("MathSchool");
  console.log(
    "These are students of your new school: \n" +
      JSON.stringify(students) +
      "\n"
  );
});
