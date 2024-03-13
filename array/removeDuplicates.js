// remove duplicate elements from the sorted array and return the new array with the pointer to last unique elements
const removeDuplicate = (arr) => {

    let i = 1, j = 0;

    for ( ; i<arr.length; i++) {

        if (arr[i] !== arr[i-1]) {
            ++j;
            arr[j] = arr[i];
        }
    }
    return { array: arr, right: j }
}

module.exports = { removeDuplicate };