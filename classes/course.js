export class Course {
  lessonsCounter;

  constructor(title, totalLessons) {
    this.title = title;
    this.totalLessons = totalLessons;
    this.lessonsCounter = 0;
  }

  performLesson() {
    this.lessonsCounter++;
  }
}
