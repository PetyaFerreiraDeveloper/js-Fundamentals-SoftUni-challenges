function phone(str) {
    let regExp = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNum;
    let numbers = [];
    while ((validNum = regExp.exec(str)) !== null) {
        numbers.push(validNum[0]);
    }
    console.log(numbers.join(', '));
}

phone("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")