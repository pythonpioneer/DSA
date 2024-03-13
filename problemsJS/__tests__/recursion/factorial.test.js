const { findFactorial } = require("../../recursion/factorial");

describe('Testing the findFactorial method', () => {

    test('Factorial with number > 1', () => {

        expect(findFactorial(5)).toBe(120);
    });
    test('Factorial with number < 1', () => {

        expect(findFactorial(0)).toBe(1);
    });
})