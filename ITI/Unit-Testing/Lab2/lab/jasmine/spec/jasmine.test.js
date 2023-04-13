const { MathUtils } = require('./path/to/MathUtils.js');

describe('MathUtils', () => {
  const MathUtils = require('./MathUtils');

  describe('MathUtils', () => {

    let mathUtils;

    beforeEach(() => {
      mathUtils = new MathUtils();
    });

    describe('sum', () => {
      it('should return the sum of two numbers', () => {
        expect(mathUtils.sum(2, 3)).toEqual(5);
        expect(mathUtils.sum(-2, 5)).toEqual(3);
        expect(mathUtils.sum(0, 0)).toEqual(0);
      });

      it('should throw an error if only one argument is passed', () => {
        expect(() => mathUtils.sum(2)).toThrowError('Missing parameter');
      });

      it('should throw an error if more than two arguments are passed', () => {
        expect(() => mathUtils.sum(2, 3, 4)).toThrowError('Invalid number of parameters');
      });

      it('should throw an error if one of the arguments is not a number', () => {
        expect(() => mathUtils.sum(2, '3')).toThrowError('Invalid parameter type');
      });
    });

    describe('subtract', () => {
      it('should return the difference of two numbers', () => {
        expect(mathUtils.subtract(3, 2)).toEqual(1);
        expect(mathUtils.subtract(5, -2)).toEqual(7);
        expect(mathUtils.subtract(0, 0)).toEqual(0);
      });

      it('should throw an error if only one argument is passed', () => {
        expect(() => mathUtils.subtract(2)).toThrowError('Missing parameter');
      });

      it('should throw an error if more than two arguments are passed', () => {
        expect(() => mathUtils.subtract(2, 3, 4)).toThrowError('Invalid number of parameters');
      });

      it('should throw an error if one of the arguments is not a number', () => {
        expect(() => mathUtils.subtract(2, '3')).toThrowError('Invalid parameter type');
      });
    });

    describe('multiply', () => {
      it('should return the product of two numbers', () => {
        expect(mathUtils.multiply(2, 3)).toEqual(6);
        expect(mathUtils.multiply(-2, 5)).toEqual(-10);
        expect(mathUtils.multiply(0, 0)).toEqual(0);
      });

      it('should throw an error if only one argument is passed', () => {
        expect(() => mathUtils.multiply(2)).toThrowError('Missing parameter');
      });

      it('should throw an error if more than two arguments are passed', () => {
        expect(() => mathUtils.multiply(2, 3, 4)).toThrowError('Invalid number of parameters');
      });

      it('should throw an error if one of the arguments is not a number', () => {
        expect(() => mathUtils.multiply(2, '3')).toThrowError('Invalid parameter type');
      });
    });


    describe("divide", () => {
      it("should return the correct result when both parameters are valid numbers", () => {
        const mathUtils = new MathUtils();
        expect(mathUtils.divide(10, 2)).toBe(5);
      });

      it("should throw an error when the second parameter is 0", () => {
        const mathUtils = new MathUtils();
        expect(() => mathUtils.divide(10, 0)).toThrow("Cannot divide by zero");
      });

      it("should throw an error when the first parameter is not a number", () => {
        const mathUtils = new MathUtils();
        expect(() => mathUtils.divide("10", 2)).toThrow("Invalid parameter type");
      });

      it("should throw an error when the second parameter is not a number", () => {
        const mathUtils = new MathUtils();
        expect(() => mathUtils.divide(10, "2")).toThrow("Invalid parameter type");
      });

      it("should throw an error when the number of parameters is incorrect", () => {
        const mathUtils = new MathUtils();
        expect(() => mathUtils.divide(10)).toThrow("Invalid number of parameters");
      });
    });

    describe('average', () => {
      it('should return the average of two positive numbers', () => {
        expect(MathUtils.average(2, 3)).toBe(2.5);
      });

      it('should return the average of a positive and a negative number', () => {
        expect(MathUtils.average(-2, 3)).toBe(0.5);
      });

      it('should return the average of two negative numbers', () => {
        expect(MathUtils.average(-2, -3)).toBe(-2.5);
      });

      it('should throw an error if either argument is not a number', () => {
        expect(() => { MathUtils.average(2, '3') }).toThrow();
        expect(() => { MathUtils.average('2', 3) }).toThrow();
        expect(() => { MathUtils.average('2', '3') }).toThrow();
      });
    });

    describe('factorial', () => {
      it('should return the factorial of a positive number', () => {
        expect(MathUtils.factorial(5)).toBe(120);
      });

      it('should return 1 when calculating the factorial of 0 or 1', () => {
        expect(MathUtils.factorial(0)).toBe(1);
        expect(MathUtils.factorial(1)).toBe(1);
      });

      it('should throw an error when calculating the factorial of a negative number', () => {
        expect(() => { MathUtils.factorial(-5) }).toThrow();
      });

      it('should throw an error if the argument is not a number', () => {
        expect(() => { MathUtils.factorial('5') }).toThrow();
      });
    });

    describe('checkPositivity', () => {
      it('should return true if the number is positive', () => {
        expect(MathUtils.checkPositivity(5)).toBe(true);
      });

      it('should return false if the number is negative', () => {
        expect(MathUtils.checkPositivity(-5)).toBe(false);
      });

      it('should return true if the number is 0', () => {
        expect(MathUtils.checkPositivity(0)).toBe(true);
      });

      it('should throw an error if the argument is not a number', () => {
        expect(() => { MathUtils.checkPositivity('5') }).toThrow();
      });
    });
  })
});