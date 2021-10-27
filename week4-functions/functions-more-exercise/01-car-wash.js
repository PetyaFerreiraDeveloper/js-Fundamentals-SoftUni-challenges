function car(input) {
    let cleanValue = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        switch (command) {
            case 'soap':
                cleanValue += 10;
                break;
            case 'water':
                cleanValue += 0.2 * cleanValue;
                break;
            case 'vacuum cleaner':
                cleanValue += 0.25 * cleanValue;
                break;
            case 'mud':
                cleanValue -= 0.1 * cleanValue;
                break;
        }
    }
    console.log(`The car is ${cleanValue.toFixed(2)}% clean.`);
}

car(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])