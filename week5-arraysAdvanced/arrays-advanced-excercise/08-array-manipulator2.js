function manip(integArr, commands) {
    for (let command of commands) {
        //console.log(commands[i])
        let tokens = command.split(' ');
        // console.log(tokens)
        let currentCommand = tokens[0]
        //console.log(currentCommand)
        if (currentCommand === 'add') {
            let indexToAdd = Number(tokens[1]);
            let elementToAdd = Number(tokens[2]);
            integArr.splice(indexToAdd, 0, elementToAdd);
            //console.log(integArr);
        } else if (currentCommand === 'addMany') {
            let index = Number(tokens[1]);
            tokens.splice(0, 2);
            let numbersToAdd = tokens.map(Number);
            integArr.splice(index, 0, ...numbersToAdd);
            //console.log(integArr)
        } else if (currentCommand === 'contains') {
            let result = integArr.indexOf(Number(tokens[1]));
            console.log(result);
        } else if (currentCommand === 'remove') {
            let index = Number(tokens[1]);
            integArr.splice(index, 1);
        } else if (currentCommand === 'shift') {
            let position = tokens[1];
            for (let i = 0; i < position; i++) {
                let firstNum = integArr.shift();
                integArr.push(firstNum)
            }
        } else if (currentCommand === 'sumPairs') {
            let resultArr = [];
            if (integArr.length % 2 !== 0) {
                integArr.push(0);
            }
            for (let i = 0; i < integArr.length - 1; i += 2) {
                let sum = integArr[i] + integArr[i + 1];
                resultArr.push(sum)
            }
            integArr = resultArr;
        } else if (currentCommand === 'print') {
            console.log(`[ ${integArr.join(', ')} ]`);
        } 
    }
}

manip([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
    
    )