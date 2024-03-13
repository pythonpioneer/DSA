const removeDuplicate = (arr) => {

    let i = 1, j = 0;

    for ( ; i<arr.length; i++) {

        if (arr[i] !== arr[i-1]) {
            ++j;
            arr[j] = arr[i];
        }
    }
    console.log(j)
    return { array: arr, right: j }
}

module.exports = { removeDuplicate };