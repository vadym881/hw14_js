export class Student {
  courses;

  constructor(name, surname, birthYear) {
    //implement id logic
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.courses = {};
  }

  isEnrolled(course) {
    //return Object.keys(this.courses).indexOf(course.title) >= 0;
    return course.title in this.courses;
  }

  enrollOnCourse(course) {
    if (this.isEnrolled(course)) return;
    this.courses[course.title] = { grades: [], attendanceCounter: 0 };
  }

  addGrade(course, grade) {
    if (!this.isEnrolled(course)) return;
    this.courses[course.title].grades.push(grade);
  }

  getAverageGrade(course) {
    if (!this.isEnrolled(course)) return;
    if (this.courses[course.title].grades.length === 0) return;
    let averageGrade = 0;
    for (const grade of this.courses[course.title].grades) {
      averageGrade += grade;
    }
    return averageGrade / this.courses[course.title].grades.length;
  }

  getOverallAverageGrade() {
    let averageGrade = 0;
    for (const course in this.courses) {
      const courseAverageGrade = this.getAverageGrade(course);
      averageGrade += courseAverageGrade;
    }
    return averageGrade / Object.keys(this.courses).length;
  }

  attendLection(course) {
    if (!this.isEnrolled(course)) return;
    this.courses[course.title].attendanceCounter++;
  }

  getCurrentAttendance(course) {
    if (!this.isEnrolled(course)) return;
    return (
      (this.courses[course.title].attendanceCounter / course.lessonsCounter) *
      100
    ).toFixed(0);
  }

  getOverallCurrentAttendance() {
    let attendance = 0;
    for (const course in this.courses) {
      const courseAttendance = this.getCurrentAttendance(course);
      attendance += courseAttendance;
    }
    return attendance / Object.keys(this.courses).length;
  }

  getFullAttendance(course) {
    if (!this.isEnrolled(course)) return;
    return (
      (this.courses[course.title].attendanceCounter / course.totalLessons) *
      100
    ).toFixed(0);
  }

  changeCourse(oldCourse, newCourse) {
    if (!this.isEnrolled(oldCourse)) return;
    if (this.isEnrolled(newCourse)) return;
    this.enrollOnCourse(newCourse);
    //implement via loop
    this.courses[newCourse.title].grades = this.courses[oldCourse.title].grades;
    this.courses[newCourse.title].attendanceCounter =
      this.courses[oldCourse.title].attendanceCounter;
    this.deleteCourse(oldCourse);
  }

  deleteCourse(course) {
    if (!this.isEnrolled(course)) return;
    delete this.courses[course.title];
  }

  printInfo() {
    console.log(`${this.name} ${this.surname} ${this.birthYear}`);
    Object.entries(this.courses).forEach((c) => console.log(c));
  }
}
