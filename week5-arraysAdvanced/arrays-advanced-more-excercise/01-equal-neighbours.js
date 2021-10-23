function equalN(input) {
    let count = 0;
    let arrLength = input.length;

    for (let i = 0; i < arrLength; i++) {
        let rowLength = input[i].length;
        for (let j = 0; j < rowLength - 1; j++) {
            
            if (input[i][j] === input[i][j+1]) {
                count++;
            }
        }
        let nextRow = i + 1;
        if (nextRow < input.length) {
            for (let k = 0; k < rowLength; k++) {
                if (input[i][k] === input[nextRow][k]) {
                    count++;
                }
            }
        }
    }
    console.log(count);
}

equalN([['test', 'test', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)