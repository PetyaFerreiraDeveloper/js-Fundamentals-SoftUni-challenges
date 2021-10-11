function solve(arr) {
    let count = 1;
    let maxCount = 1;
    let printNum = [];
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
            if(count > 2) {
                newArr.push(arr[i]);
            } else {
                newArr.push(arr[i]);
                newArr.push(arr[i + 1]);
            }
            
        } else if (maxCount < count) {
            maxCount = count;
            printNum = newArr;
            count = 1;
            newArr = []
        } else {
            newArr = [];
            count = 1;
        }
    }
    console.log(printNum.join(' '))

}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3])