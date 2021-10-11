function rotate(arr) {
    let numRotations = arr.pop()
    let arrL = arr.length;

    for(let i = 0; i < numRotations; i++) {
        let currElement = arr.pop();
        arr.unshift(currElement);
    }
    console.log(arr.join(' '))

}

rotate(['1', '2', '3', '4', '2'])
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15'])