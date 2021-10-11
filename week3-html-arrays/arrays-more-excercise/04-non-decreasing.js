function nonDec(arr) {
    let arrL = arr.length;
    let largestSoFar = arr[0];
    let newArr = [largestSoFar];

    for (let i = 1; i < arrL; i++) {
        if (arr[i] >= largestSoFar) {
            largestSoFar = arr[i];
            newArr.push(largestSoFar);
        }
    }
    console.log(newArr.join(' '))
}

nonDec([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDec([1, 2, 3, 4])
nonDec([20, 3, 2, 15, 6, 1])