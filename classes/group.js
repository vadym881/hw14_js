export class Group {
  studentsList;
  constructor(title) {
    this.title = title;
    this.studentsList = [];
  }

  hasStudent(student) {
    return this.studentsList.includes(student);
  }

  addStudent(student) {
    if (this.hasStudent(student)) return;
    this.studentsList.push(student);
  }

  deleteStudent(student) {
    if (!this.hasStudent(student)) return;
    const index = this.studentsList.indexOf(student);
    this.studentsList.splice(index, 1);
  }

  getStudentsRateByGrades() {
    // improve method
    console.log(
      this.studentsList.sort(
        (a, b) => b.getOverallAverageGrade() - a.getOverallAverageGrade()
      )
    );
  }

  getStudentsRateByAttendance() {
    // improve method
    console.log(
      this.studentsList.sort(
        (a, b) =>
          b.getOverallCurrentAttendance() - a.getOverallCurrentAttendance()
      )
    );
  }

  printInfo() {
    this.studentsList.forEach((s) => s.printInfo());
  }
}
