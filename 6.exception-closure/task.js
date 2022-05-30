const parseCount = (string) => {
    const result = Number.parseInt(string);
    if (isNaN(result)) {
        const invalid = new Error ('Невалидное значение');
        throw invalid;
    } else {
        return result;
    };
};

const validateCount = (string) => {
    let check, result;
    try {
        result = parseCount(string);
    } catch (invalid) {
        check = invalid;
    } finally {
        if (!check) {
            return result;
        } else {
            return check;
        };
    };
}; 

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if ((firstSide + secondSide) < thirdSide 
        || (firstSide + thirdSide) < secondSide
        || (thirdSide + secondSide) < firstSide) {
            const notTriangle = new Error('Треугольник с такими сторонами не существует');
            throw notTriangle;
        };
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    };

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    };

    getArea() {
        const halfPerimetr = this.getPerimeter() / 2;
        return Number((Math.sqrt(
            halfPerimetr 
            * (halfPerimetr - this.firstSide) 
            * (halfPerimetr - this.secondSide) 
            * (halfPerimetr - this.thirdSide))).toFixed(3));
    };
};

const getTriangle = (firstSide, secondSide, thirdSide) => {
    let triangle = {};
    try {
        triangle = new Triangle(firstSide, secondSide, thirdSide);
    }  catch (notTriangle) {
        triangle.getArea = () => 'Ошибка! Треугольник не существует';
        triangle.getPerimeter = () => 'Ошибка! Треугольник не существует';
    } finally {
        if (!triangle.hasOwnProperty('getArea')) {
            return new Triangle(firstSide, secondSide, thirdSide);
        };
        return triangle;
    };
};
