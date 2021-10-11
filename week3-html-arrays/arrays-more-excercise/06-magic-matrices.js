function magic(arr) {
    let arrL = arr.length;
    let firstElement = arr[0];
    let firstElementL = firstElement.length;
    let sumFirstRow = 0;
    let bool = true;
    for (let i = 0; i < firstElementL; i++) {
        sumFirstRow += firstElement[i]
    }
    console.log(sumFirstRow) // 15

    for (let i = 1; i < arrL; i++) {
        let sumCurrentRow = 0;
        let sumColumn = 0;
        let currElement = arr[i];
        for (let j = 0; j < currElement.length; j++) {
            sumCurrentColumn += currElement[]
            sumCurrentRow += currElement[j]
        }
        if (sumCurrentRow !== sumFirstRow) {
            bool = false;
            console.log('false');
            break;
        } 

        
    }
    if (bool) {
        console.log('true')
    }
}

magic([[4, 5, 6],
    [6, 6, 4],
    [5, 5, 5]]
   )