const decimalToBinary = (n) => {
    let res = '';
    if (n === 0) return '0';

    while (n !== 0) {
        res = '' + (n % 2) + res;
        n = Math.floor(n / 2);
    }
    return res;
}

const binaryToDecimal = (val) => {
    // val = "111";
    let n = val.length;
    let res = 0;

    for (let i=0; i<n; i++) {
        res += (val[i] * Math.pow(2, n-i-1))
    }
    return res;
}

module.exports = { decimalToBinary, binaryToDecimal };