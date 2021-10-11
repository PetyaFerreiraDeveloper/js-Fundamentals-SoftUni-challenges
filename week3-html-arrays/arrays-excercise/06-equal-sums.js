function equal(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let bool = true;

    if (arr.length === 1) {
        console.log(0);
    } else {
        for (let i = 1; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
            for (let k = i + 1; k < arr.length; k++) {
                rightSum += arr[k];
            }
            // console.log(`leftsum: ${leftSum}`)
            // console.log(`rightsum: ${rightSum}`)
            if (leftSum === rightSum) {
                console.log(i);
                bool = false;
            } else {
                leftSum = 0;
                rightSum = 0;
            }
        }
        if (bool) {
            console.log('no')
        }
    }
    
}

equal([1, 2, 3, 3])