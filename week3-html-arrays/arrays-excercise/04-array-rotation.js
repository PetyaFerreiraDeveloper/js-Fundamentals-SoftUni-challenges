function rotate(arr, num) {
    for (let i = 0; i < num; i++) {
        let numberToMove = arr.shift();
        arr.push(numberToMove)
    }
    let output = arr.join(' ');
    console.log(output)
}

rotate([51, 47, 32, 61, 21], 2)
rotate([32, 21, 61, 1], 4)
rotate([2, 4, 15, 31], 5)