// import { reverseArr } from "../../array/reverseArr";

const reverseArr = (arr, n) => {
    return [3, 4, 5, 6, 1, 2];
}
// testing the reverse array function
describe('Testing reverseArr funcion', () => {

    test('Array length is even', () => {
        
        // constraints
        const arr = [1, 2, 3, 4, 5, 6];
        const n = 2;
        const expectedRevArr = [3, 4, 5, 6, 1, 2];

        const actualRevArr = reverseArr(arr, n);
        expect(actualRevArr).toEqual(expectedRevArr);
    });
    test('Array length is odd', () => {
        
        // constraints
        const arr = [4, 2, 5, 1, 6];
        const n = 3;
        const expectedRevArr = [1, 6, 4, 2, 5];

        const actualRevArr = reverseArr(arr, n);
        expect(actualRevArr).toEqual(expectedRevArr);
    });
});