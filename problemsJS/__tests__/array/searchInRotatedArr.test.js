const { findValue } = require("../../array/searchInRotatedArr");

describe('Testing find value method', () => {

    test('Unique array with key present', () => {

        // constraints
        const arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
        const key = 7;
        const expectedOutput = 3;
        const actualOutput = findValue(arr, key);

        expect(actualOutput).toBe(expectedOutput);
    });

    test('Unique array with key present', () => {

        // constraints
        const arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
        const key = 1;
        const expectedOutput = 6;
        const actualOutput = findValue(arr, key);

        expect(actualOutput).toBe(expectedOutput);
    });
    test('Unique array with key present', () => {

        // constraints
        const arr = [5, 6, 8, 9, 11, 14, 2, 4, 4];
        const key = 4;
        const expectedOutput = 7;
        const actualOutput = findValue(arr, key);

        expect(actualOutput).toBe(expectedOutput);
    });
    test('Unique array with key present', () => {

        // constraints
        const arr = [5, 6, 8, 9, 11, 14, 2, 4, 4];
        const key = 3;
        const expectedOutput = -1;
        const actualOutput = findValue(arr, key);

        expect(actualOutput).toBe(expectedOutput);
    });
});