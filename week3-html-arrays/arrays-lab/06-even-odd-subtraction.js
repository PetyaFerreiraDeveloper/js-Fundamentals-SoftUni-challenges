function solve(arr) {
    let arrLength = arr.length;
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        } else {
            sumOdd += arr[i]
        }
    }
    let result = sumEven - sumOdd;
    
    console.log(result)
}

solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])