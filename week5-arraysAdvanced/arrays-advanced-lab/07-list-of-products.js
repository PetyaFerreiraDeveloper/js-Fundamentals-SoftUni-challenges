function list(arr) {
    let arrSorted = arr.sort()
    //console.log(arrSorted);
    for (let i = 0; i < arrSorted.length; i++) {
        console.log(`${i + 1}.${arrSorted[i]}`)
    }
}

list(['Watermelon', 'Banana', 'Apples'])