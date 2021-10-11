function printEl(arr) {
    let arrL = arr.length;
    let step = Number(arr[arrL-1]);
    let newArr = [];
    
    for (let i = 0; i < arrL - 1; i += step) {
        newArr.push(arr[i]);
    }

    console.log(newArr.join(' '))
}

printEl(['5', '20', '31', '4', '20', '2'])
printEl(['dsa', 'asd', 'test', 'test', '2'])
printEl(['1', '2', '3', '4', '5', '6'])