function sum(arr) {
    let sum = 0;
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (Number(arr[i]) % 2 === 0) {
            sum += Number(arr[i]);
        }
    }
    console.log(sum)
}

sum(['1','2','3','4','5','6'])
sum(['3','5','7','9'])
sum(['2','4','6','8','10'])