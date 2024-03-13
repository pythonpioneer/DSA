const { twoSum } = require("../../array/twoSum");

describe('Testing the two sum function with sorted array', () => {

    test('Testing when sum is present', () => {

        const arr = [2, 3, 5, 6, 11];
        const sum = 9;
        const expectedOutput = [1, 3];

        expect(twoSum(arr, sum)).toEqual(expectedOutput);
    })
})