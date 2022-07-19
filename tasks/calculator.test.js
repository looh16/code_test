import Calculator from "./calculator";

const calc = new Calculator();
  
  describe('my beverage', () => {

    let addResult = calc.add(1 , 2);
    let subtractResult = calc.subtract(1 , 2);
    let divideResult = calc.divide(1 , 2);
    let multiplyResult = calc.multiply(1, 2);


    test('Add', () => {
      expect(addResult).toBe(3);
    });
  
    test('Subtract', () => {
        expect(subtractResult).toBe(-1);
      });

    test('Divide', () => {
        expect(divideResult).toBe(0.5);
      });

    test('Multiply', () => {
        expect(multiplyResult).toBe(2);
      });

  });
