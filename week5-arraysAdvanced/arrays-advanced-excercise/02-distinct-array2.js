function distinct(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (!newArr.includes(el)) {
            newArr.push(el)
        }
    }
    console.log(newArr.join(' '))
}

distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])