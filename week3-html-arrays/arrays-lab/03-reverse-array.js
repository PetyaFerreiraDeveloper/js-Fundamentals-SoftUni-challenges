function reverse(n, arr) {

    let newArr = []
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i])
    }
    
    let revArr = [];

    for (let i = newArr.length-1; i >= 0; i--) {
        revArr.push(newArr[i])
    }
    let result = revArr.join(' ')
    console.log(result)
}

reverse(3, [10, 20, 30, 40])