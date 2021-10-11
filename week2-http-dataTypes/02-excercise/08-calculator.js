// function calculator(num1, operator, num2) {
//     let result = num1 + operator + num2;
//     console.log(eval(result).toFixed(2))

// }

// calculator(25.5,
//     '-',
//     3
// );


function calculator(num1, oper, num2) {
    let firstNumber = num1;
    let operator = oper;
    let secondNumber = num2;
    let result = 0;

    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
    }

    console.log(result.toFixed(2))

}

calculator(25.5,
    '-',
    3
);