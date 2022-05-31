const parseCount = (string) => {
    const result = Number.parseInt(string);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    } else {
        return result;
    };
};

const validateCount = (string) => {
    try {
        return parseCount(string);
    } catch (err) {
        return err;
    };
}; 

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if ((firstSide + secondSide) < thirdSide 
        || (firstSide + thirdSide) < secondSide
        || (thirdSide + secondSide) < firstSide) {
            throw new Error('Треугольник с такими сторонами не существует');
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
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    }  catch (err) {
        let notTriangle = {};
        notTriangle.getArea = () => 'Ошибка! Треугольник не существует';
        notTriangle.getPerimeter = () => 'Ошибка! Треугольник не существует';
        return notTriangle;
    };
};
