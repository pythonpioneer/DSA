const findFactorial = (n) => {
    if (n === 1 || n == 0) return 1;
    return n * findFactorial(n-1);
}

module.exports = { findFactorial };