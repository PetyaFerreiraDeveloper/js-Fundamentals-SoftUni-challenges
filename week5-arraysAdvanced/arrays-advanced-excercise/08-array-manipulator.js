function arrMan(arrNumbers, arrCommands) {
    // console.log(arrNumbers)
    let arrCommandsL = arrCommands.length;
    for (let i = 0; i < arrCommandsL; i++) {
        let currentCommand = arrCommands[i].split(' ');
        //console.log(currentCommand);
        let command = currentCommand[0];

        if (command === 'print') {
            console.log(`[ ${arrNumbers.join(', ')} ]`);
            break;
        }
        currentCommand.shift();

        switch (command) {
            case 'add':
                currentCommand = currentCommand.map((el) => {
                    return Number(el);
                })
                let indexToAdd = currentCommand[0];
                let elemToAdd = currentCommand[1]
                arrNumbers.splice(indexToAdd, 0, elemToAdd);
                break;
            case 'addMany':
                currentCommand = currentCommand.map((el) => {
                    return Number(el);
                })
                let indexForNewNumbers = currentCommand.shift();
                for (let i = 0; i < currentCommand.length; i++) {
                    let currentNum = currentCommand[i];
                    arrNumbers.splice(indexForNewNumbers, 0, currentNum);
                    indexForNewNumbers++;
                }
                break;
            case 'contains':
                let searchNum = Number(currentCommand[0])
                let indexOfNumber = arrNumbers.indexOf(searchNum);
                console.log(indexOfNumber)
                break;
            case 'remove':
                let indexNumToRemove = Number(currentCommand[0]);
                arrNumbers.splice(indexNumToRemove, 1);
                break;
            case 'shift':
                let shiftPositions = Number(currentCommand[0]);
                for (let j = 0; j < shiftPositions; j++) {
                    let numberToShift = arrNumbers.shift();
                    arrNumbers.push(numberToShift);
                }
                break;
            case 'sumPairs':
                if (arrNumbers.length % 2 !== 0) {
                    arrNumbers.push(0);
                }
                let sumArr = [];
                let arrNumbersL = arrNumbers.length;
                for (let i = 0; i < arrNumbersL - 1; i += 2 ) {
                    let sum = 0;
                    sum = Number(arrNumbers[i]) + Number(arrNumbers[i+1]);
                    sumArr.push(sum);
                }
                arrNumbers = sumArr.slice(0);
                break;
        }
    }  
}

arrMan([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    
)