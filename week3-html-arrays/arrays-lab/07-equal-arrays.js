function solve(arr1, arr2) {
    let arr1Length = arr1.length;
    let arr2Length = arr2.length;
    let sum = 0;
    let bool = false;

    for (let i = 0; i < arr1Length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            bool = false;
            break;
        } else {
            sum += Number(arr1[i]);
            bool = true;
        }
    }
    if (bool) {
        console.log(`Arrays are identical. Sum: ${sum}`)
    }
}

solve(['10', '20', '30'], ['10', '20', '30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])