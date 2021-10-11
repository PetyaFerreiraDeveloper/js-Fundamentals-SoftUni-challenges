// function expression - we can not use the function before its initialization

let sum = function(num1, num2) {
    console.log(num1 + num2)
}

sum(100, 200)

// function declaration
// hoisting of function - we can use the function before function declaration (this only works with function declaration)

function demo(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2
}

function test() {
    console.log(300 + sumOfTwoNumbers(100,200))
}

test()

function result() {
    console.log(sumOfTwoNumbers(100,200));
}

result()