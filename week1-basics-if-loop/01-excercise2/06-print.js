function print(num1, num2) {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}

print(50, 60)