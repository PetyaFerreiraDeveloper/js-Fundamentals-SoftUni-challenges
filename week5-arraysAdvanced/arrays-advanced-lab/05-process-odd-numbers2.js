function process(arr) {
    let arrL = arr.length;
    let newArr = arr.filter((el)=>{
        if (arr.indexOf(el) % 2 !== 0) {
            return el;
        }
    })
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