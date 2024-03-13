const { decimalToBinary, binaryToDecimal } = require("../../bits/bits");

describe('Testing the decimal to binary conversion', () => {

    test('Testing with number > 20', () => {

        expect(decimalToBinary(19)).toBe('10011');
    });
    test('Testing with number < 7', () => {

        expect(decimalToBinary(7)).toBe('111');
    });
    test('Testing with number < 1', () => {

        expect(decimalToBinary(0)).toBe('0');
    });
});

describe('Testing the binary to deciaml conversion', () => {
    
    test('Testing with "some one some zero"', () => {

        expect(binaryToDecimal("101011")).toBe(43);
    });
    test('Testing with "all one"', () => {

        expect(binaryToDecimal("111")).toBe(7);
    });
    test('Testing with "all zero"', () => {

        expect(binaryToDecimal("00000")).toBe(0);
    });

})