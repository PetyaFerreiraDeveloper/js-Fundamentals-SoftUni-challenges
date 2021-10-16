function process(arr) {
    let arrL = arr.length;
    let newArr = []
    for (let i = 0; i < arrL; i++) {
        if (i % 2 !== 0) {
            newArr.push(arr[i])
        }
    }
    newArr = newArr.map((el) => {
        return el * 2
    })
    let reversedArr = [];
    for (let i = newArr.length - 1; i >= 0; i--) {
        reversedArr.push(newArr[i])
    }
    console.log(reversedArr.join(' '))
}

process([10, 15, 20, 25])