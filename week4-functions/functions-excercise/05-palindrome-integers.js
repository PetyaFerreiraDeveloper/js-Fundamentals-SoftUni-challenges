function palindrome(arr) {
    let arrL = arr.length;
    let bool = true;
    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i].toString();
        let currentNumL = currentNum.length;
        for (let j = 0; j < currentNumL; j++) {
            if (currentNum[j] !== currentNum[currentNumL - 1 - j]){
                bool = false;
                break;
            } else {
                bool = true;
            }
        }
        if (bool) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
}

palindrome([32,2,232,1010])