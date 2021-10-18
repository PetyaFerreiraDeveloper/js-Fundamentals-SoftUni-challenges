function sort(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a - b;
    });
    let newArr = [];
    
    for (let i = 0; i < sortedArr.length; i++) {
        let lastEl = sortedArr.pop();
        let firstEl = sortedArr[i];
        newArr.push(lastEl);
        newArr.push(firstEl)
    }
    console.log(newArr.join(' '));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])