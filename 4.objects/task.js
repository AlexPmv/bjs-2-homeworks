function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  };
};

Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined) {
    this.marks = marks;
  } else {
      this.marks.push(...marks);
  };
};

Student.prototype.getAverage = function () {
  return this.marks.reduce((acc, item, idx, arr) => {
    if (idx === arr.length - 1) {
      return (acc + item) / arr.length;
    } else {
      return acc + item;
    }
  }, 0);
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};