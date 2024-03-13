/* Question 1
* write a function to reverse an array w.r.t input 
    Test Case:
        arr = 1 2 3 4 5 6 
        n = 2
        ouput = 3 4 5 6 1 2

    Test Case:
        arr = 4 2 5 1 6
        n = 3
        ouput = 1 6 4 2 5
*/
const reverseArr = (arr, n) => {

    // rotating left and right part of the array
    reverse(arr, 0, n-1)
    reverse(arr, n, arr.length-1);

    // reverse and return the whole arr
    reverse(arr, 0, arr.length-1);
    return arr;
}

// fully reverse the arr 1 2 3 4 5 6
const reverse = (arr, i, j) => {

    // traverse in the arr
    for (; i<=j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

module.exports = { reverseArr };