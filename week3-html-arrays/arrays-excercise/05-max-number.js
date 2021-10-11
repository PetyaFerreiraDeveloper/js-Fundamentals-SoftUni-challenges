function max(arr) {
    
    let arrL = arr.length;
    let newArr = [arr[arrL - 1]];
    let maxSoFar = arr[arrL - 1];
    for (let i = arrL - 2; i >= 0; i--) {
        if (arr[i] > maxSoFar) {
            maxSoFar = arr[i];
            newArr.push(maxSoFar);
        }
    }
    let result = [];
    for (let i = newArr.length-1; i >= 0; i--) {
        result.push(newArr[i])
    }
    console.log(result.join(' '))
}

// max([1, 4, 3, 2])
max([27, 59, 42, 2, 13, 45, 48])