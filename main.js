import { Student } from "./classes/student.js";
import { Course } from "./classes/course.js";
import { Group } from "./classes/group.js";

//implement seeding
export const javaScript = new Course("JavaScript Basic", 18);
export const typeScript = new Course("TypesSript", 22);
export const nodeBasic = new Course("Node", 25);
export const frontEnd = new Course("Frontend", 21);
export const react = new Course("React", 30);

const vadym = new Student("Vadym", "Iaroshenko", 2009);
const andrey = new Student("Andrey", "Skripchenko", 2005);
const bogdan = new Student("Bogdan", "Pervak", 2001);
const sasha = new Student("Sasha", "Chorniy", 2003);

const gr1 = new Group("GR1");

vadym.enrollOnCourse(javaScript);
for (let i = 0; i < javaScript.totalLessons / 2; i++) {
  javaScript.performLesson();
  if (i % 2 === 0) vadym.attendLection(javaScript);
}
vadym.addGrade(javaScript, 90);
vadym.addGrade(javaScript, 80);
vadym.addGrade(javaScript, 70);

andrey.enrollOnCourse(javaScript);
for (let i = 0; i < javaScript.totalLessons / 2; i++) {
  andrey.attendLection(javaScript);
}
andrey.addGrade(javaScript, 90);
andrey.addGrade(javaScript, 85);

bogdan.enrollOnCourse(javaScript);
bogdan.attendLection(javaScript);
bogdan.addGrade(javaScript, 50);

bogdan.enrollOnCourse(typeScript);
for (let i = 0; i < typeScript.totalLessons / 2; i++) {
  typeScript.performLesson();
  if (i % 2 === 0) bogdan.attendLection(typeScript);
}
bogdan.addGrade(typeScript, 90);
bogdan.addGrade(typeScript, 82);
bogdan.addGrade(typeScript, 70);

andrey.enrollOnCourse(typeScript);
for (let i = 0; i < typeScript.totalLessons / 2; i++) {
  andrey.attendLection(typeScript);
}
andrey.addGrade(typeScript, 70);
andrey.addGrade(typeScript, 75);
andrey.addGrade(typeScript, 90);
andrey.addGrade(typeScript, 85);

sasha.enrollOnCourse(typeScript);
sasha.attendLection(typeScript);
sasha.addGrade(typeScript, 50);

//console.log(vadym.getAverageGrade(javaScript))
//console.log(vadym.getCurrentAttendance(javaScript))
//console.log(vadym.getFullAttendance(javaScript))
//vadym.printStudent();
//console.log(javaScript)
//vadym.deleteCourse(javaScript)
//vadym.changeCourse(javaScript, typeScript)

gr1.addStudent(vadym);
gr1.addStudent(andrey);
gr1.addStudent(bogdan);
gr1.addStudent(sasha);
//gr1.deleteStudent(vadym)

gr1.getStudentsRateByGrades();
gr1.getStudentsRateByAttendance();
