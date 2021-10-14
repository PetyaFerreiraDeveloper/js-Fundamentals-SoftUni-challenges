function negative(arr) {
    let newArr = arr.map((str) => {
        return Number(str);
    })
    let arrSorted = [];
    newArr.map((num) => {
        if (num < 0) {
            arrSorted.unshift(num)
        } else {
            arrSorted.push(num)
        }
    })
    let arrSortedL = arrSorted.length;
    for (let i = 0; i < arrSortedL; i++) {
        console.log(arrSorted[i])
    }
    
}

negative(['3', '-2', '0', '-1'])