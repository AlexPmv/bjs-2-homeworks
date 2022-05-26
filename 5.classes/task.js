// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = Number(value.toFixed(0));
        };
    };

    get state() {
        return this._state;
    };

    fix() {
        this.state = this._state + (this._state * 0.5);
    }
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
};

// Задача 2
class Library {
    constructor(name) {
        this.name = String(name);
        this.books = [];
    };

    addBook(book) {
        if (book._state >= 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value) {
        const result = this.books.find((item) => {
          for (const [objKey, objValue] of Object.entries(item)) {
            if (objKey === type && objValue === value) {
              return true;
            };
          };
        });
        
        if (result === undefined) {
          return null;
        };
        return result;
    };

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book === null) {
            return book;
        };
        return this.books.splice(this.books.indexOf(book), 1)[0];
    }
};

// Задача 3
class Student {
    constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marksJournal = [];
    };

    getSubjectByName(subjectName) {
        return this.marksJournal.find((item) => item.name === subjectName);
    }

    set subject(subjectName) {
        if (!this.getSubjectByName(subjectName)) {
            this.marksJournal.push({
                name: subjectName,
                marks: [],
            });
        };
    };


    set mark(markSubjectArr) {
        if (markSubjectArr[0] < 1 || markSubjectArr[0] > 5) {
            return console.log('Ошибка, оценка должна быть числом от 1 до 5');
        };

        this.getSubjectByName(markSubjectArr[1]).marks.push(markSubjectArr[0]);
    };

    addMark(mark, subject) {
        this.subject = subject;
        this.mark = [mark, subject];
    };

    calculateAverage(subjectObj) {
        return Number(subjectObj.marks.reduce((acc, item, idx, arr) => {
            if (idx === arr.length - 1) {
            return (acc + item) / arr.length;
            } else {
            return acc + item;
            }
        }, 0).toFixed(2));
    };

    getAverageBySubject(subject) {
        const currentSubject = this.getSubjectByName(subject);
        if (!currentSubject) {
        return console.log('Несуществующий предмет');
        };

        return this.calculateAverage(currentSubject);
    };

    getAverage() {
        let generalMarks = 0;
        this.marksJournal.forEach((item) => {
            generalMarks += this.calculateAverage(item); 
        });

        return Number((generalMarks / this.marksJournal.length).toFixed(2));
    };

    exclude(reason) {
        delete this.marksJournal;
        this.excluded = reason;
    };

};