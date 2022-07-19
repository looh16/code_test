 export default class Calculator {

    constructor(a , b) {
        this.a = a;
        this.b = b;
    }

    add = (a, b) => a + b;

    subtract = (a, b) => a - b;

    divide = (a, b) => {

        if (b === 0) {

            throw "can't divide by zero";
        }

       return a / b;
    }

    multiply = (a, b) => a * b;

}