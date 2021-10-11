function reverse(arr) {
    let arrLength = arr.length
    for (let i = 0; i < arrLength / 2; i++) {
        let buffer = arr[i];
        arr[i] = arr[arrLength - 1 - i];
        arr[arrLength - 1 - i] = buffer;
    }
    console.log(arr.join(' '))
}

reverse(['a', 'b', 'c', 'd', 'e'])