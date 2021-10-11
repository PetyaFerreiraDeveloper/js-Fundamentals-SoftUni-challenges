function solve(first, second, third) {
    let sum = first + second + third;
    let output = sum % 1 === 0 ? `${sum} - Integer` : `${sum} - Float`;
    console.log(output);
}

solve(9, 100, 1.1);