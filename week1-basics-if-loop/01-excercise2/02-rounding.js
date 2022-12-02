function round(num, condition) {
    if(condition > 15) {
        condition = 15;
    }
    let result = num.toFixed(condition);
    console.log(parseFloat(result));
}

round(10.5,3)