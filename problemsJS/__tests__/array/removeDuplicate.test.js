const { removeDuplicate } = require("../../array/removeDuplicates");

describe('Testing the remove duplicate method in sorted array', () => {

    test('Testing with multiple duplicate Elements', () => {

        const arr = [1, 1, 2, 2, 3, 3, 4, 5, 5];
        const output = [1, 2, 3, 4, 5];
        const { array, right } = removeDuplicate(arr);  // return a object with pointer

        expect(array.slice(0, right+1)).toEqual(output);
    })
})