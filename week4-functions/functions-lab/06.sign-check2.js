function check(num1, num2, num3) {
    let totalNegative = 0;
    if (isNegative(num1)) {
        totalNegative++
    }
    if (isNegative(num2)) {
        totalNegative++
    }
    if (isNegative(num3)) {
        totalNegative++
    }
    if (totalNegative % 2 === 0) {
        return 'Positive'
    } else {
        return 'Negative'
    }
}

// returns true or false
function isNegative(number) {
    return number < 0
}

console.log(check(5, 12, -15))