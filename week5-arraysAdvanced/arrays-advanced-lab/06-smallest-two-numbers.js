function small(arr) {
    let arrSorted = arr.sort((a, b) => {
        return a - b;
    })
    let result = arrSorted.splice(0, 2);
    console.log(result.join(' '));
}

small([30, 15, 50, 5])