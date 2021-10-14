function first(input) {
    let arr = input.slice(0);
    let kNum = arr.shift();
    let arrL = arr.length;
    let firstArr = arr.slice(0, kNum);
    let secArr = arr.slice(arrL - kNum, arrL);
    console.log(firstArr.join(' '))
    console.log(secArr.join(' '))
}

first([3,
    6, 7, 8, 9]
    )