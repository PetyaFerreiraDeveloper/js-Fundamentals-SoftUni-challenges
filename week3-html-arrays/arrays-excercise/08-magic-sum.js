function magic(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNum + arr[j] === num) {
                newArr.push(currentNum);
                newArr.push(arr[j]);
                console.log(newArr.join(' '));
                newArr = [];
            }
        }
    }
}

magic([1, 2, 3, 4, 5, 6],
    6
    
    )