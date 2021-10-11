function add(input) {
    let arrayLength = input.length;
    let newArray = [];
    let sumOldArray = 0;
    let sumNewArray = 0;
    for (let i = 0; i < arrayLength; i++) {
        sumOldArray += input[i];
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
        newArray.push(input[i]);
    }
    for (element of newArray) {
        sumNewArray += element;
    }
    console.log(newArray)
    console.log(sumOldArray)
    console.log(sumNewArray)

}

add([5, 15, 23, 56, 35])