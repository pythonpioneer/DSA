// finding two values, whose sum is equal to the given value
const twoSum = (arr, val) => {
    // arr = [2, 3, 5, 6, 11];

    let i = 0, j = arr.length - 1;

    // traverse in the array
    while(i < j) {
        if ((arr[i] + arr[j]) === val) return [i, j];
        else if ((arr[i] + arr[j]) > val) j--;
        else i++;
    }
    return [-1]
}

module.exports = { twoSum };