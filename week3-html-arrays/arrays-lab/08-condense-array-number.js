function solve(arr) {
    let workArray = arr;
    let workArrayLength = workArray.length;
    let condensed = [];
    while (workArray.length > 1) {
        for (let i = 0; i < workArray.length - 1; i++) {
            let newElement;
            newElement = workArray[i] + workArray[i + 1];
            
            condensed.push(newElement);  
        }
        workArray = condensed;
        if (condensed.length === 1) {
            break;
        }
        condensed = [];
    }
    console.log(workArray.join(''))
}

solve([2, 10, 3])
solve([5,0,4,1,2])
solve([1])