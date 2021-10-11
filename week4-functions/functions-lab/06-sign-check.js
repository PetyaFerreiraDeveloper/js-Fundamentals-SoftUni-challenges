function sign(num1, num2, num3) {
    if (num1 > 0) {
        if ((num2 > 0 && num3 > 0) || (num2 < 0 && num3 < 0) ) {
            console.log('Positive')
        } else {
            console.log('Negative')
        }
    } else {
        if ((num2 > 0 && num3 > 0) || (num2 < 0 && num3 < 0) ) {
            console.log('Negative')
        } else {
            console.log('Positive')
        }
    }
}

sign(-6, -12, 14)