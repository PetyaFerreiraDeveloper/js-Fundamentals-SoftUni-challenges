function sum(num) {
    let numString = num.toString()
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < numString.length; i++) {
        let newNum = Number(numString[i]);
        if (newNum % 2 === 0) {
            sumEven += newNum
        } else {
            sumOdd += newNum
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)

}

sum(3495892137259234)