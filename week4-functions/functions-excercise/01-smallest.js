function findSmallest(num1, num2, num3) {
    if (isNum1Smaller(num1, num2)) {
        if (num1 <= num3) {
            console.log(num1)
        } else {
            console.log(num3)
        }
    } else {
        if (num2 <= num3) {
            console.log(num2)
        } else {
            console.log(num3)
        }
    }

    // if num1 is smaller this function will return true
    function isNum1Smaller(number1, number2) {
        return number1 <= number2 
    }
}

findSmallest(2,-5,3)

// function isNum1Smaller(num1, num2) {
//     console.log(num1 <= num2) 
// }

// isNum1Smaller(2,-5)