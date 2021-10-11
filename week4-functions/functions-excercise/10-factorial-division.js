function div(num1, num2) {
    function fact(number) {
        let multiply = 1;
        for (let i = number; i > 0; i--) {
            multiply *= i;
        }
        return multiply;
    }
    let firstFactorial = fact(num1);
    let secondFactorial = fact(num2);
    let result = firstFactorial / secondFactorial;
    console.log(result.toFixed(2))
    
}

div(6, 2)