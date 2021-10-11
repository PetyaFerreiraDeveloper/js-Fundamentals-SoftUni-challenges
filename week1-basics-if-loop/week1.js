function demo() {
    let num = 1;
    while (num <= 3) {
        console.log(num);
        num++;
    }
    console.log(num);
    console.log();
    console.log();
}


function parse() {
    let num = '3.24';
    let testNum = '3.24phk'
    let result = Number(num);
    let result1 = parseInt(num); // cuts everything after the comma in a number
    let result2 = parseFloat(testNum); // it takes only the numbers from a string
    console.log(result);
    console.log(result1);
    console.log(result2);
}

parse()