/** Question 2
 * given a sorted and rotated array and find the index of the given element
 * 
 * TestCase:
 *      arr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
 *      key = 7
 *      ouput = 3
 * TestCase:
 *      arr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
 *      key = 1
 *      ouput = 6
 * TestCase:
 *      arr = [5, 6, 8, 9, 11, 14, 2, 4, 4]
 *      key = 4
 *      ouput = 7
 * TestCase:
 *      arr = [5, 6, 8, 9, 11, 14, 2, 4, 4]
 *      key = 3
 *      ouput = -1
 */
const findValue = (arr, key) => {
    let index = -1;

    // find the pivot element, from where the arr is rotated
    let pivot = getPivot(arr, 0, arr.length);

    index = bs(arr, 0, pivot+1, key);

    if (index === -1) {
        index = bs(arr, pivot + 1, arr.length, key);
        console.log("rbs")
    }
    return index;
}

// using binary search on sorted arr parts
const bs = (arr, l, r, key) => {
    
    let mid;
    while (l <= r) {

        mid = Math.floor((l + r) / 2);

        if (arr[mid] === key) return mid;
        else if (arr[mid] < key) r = mid - 1;
        else l = mid + 1;
    }
    return -1;
}

// to find the pivot element
const getPivot = (arr, l, r) => {

    let mid;
    while (l <= r) {
        
        mid = Math.floor((l + r) / 2);

        if (arr[mid] > arr[mid+1]) return mid;
        else if (arr[mid] < arr[mid-1]) return mid - 1; 
        else if (arr[mid] > arr[l]) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}

module.exports = { findValue };