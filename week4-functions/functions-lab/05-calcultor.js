function calc(number1, number2, operand) {
    let result = 0;
    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;

    
    switch (operand) {
        case 'multiply':
            result = multiply(number1, number2)
            break;
        case 'divide':
            result = divide(number1, number2)
            break;
        case 'add':
            result = add(number1, number2)
            break;
        case 'subtract':
            result = subtract(number1, number2)
            break;
    }

    console.log(result)

    // function multiply(num1, num2) {
    //     return num1 * num2
    // }

    // function divide(num1, num2) {
    //     return num1 / num2
    // }
    // function add(num1, num2) {
    //     return num1 + num2
    // }
    // function subtract(num1, num2) {
    //     return num1 - num2
    // }
}

calc(50, 13, 'subtract')