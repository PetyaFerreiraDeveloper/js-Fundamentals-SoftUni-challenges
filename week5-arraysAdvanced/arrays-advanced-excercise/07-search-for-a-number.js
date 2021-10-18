function search(arr1, arr2) {
    let numbersToTake = arr2[0];
    let numbersToDelete = arr2[1];
    let searchNum = arr2[2];
    count = 0;

    let takenNumbers = arr1.slice(0, numbersToTake)
    takenNumbers.splice(0, numbersToDelete);
    for (el of takenNumbers) {
        if (el === searchNum) {
            count++;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`)
}

search([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )