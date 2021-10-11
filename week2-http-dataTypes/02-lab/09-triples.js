function solve(string) {
    let letter = String.fromCharCode(97)
    // for (let i = 0; i < Number(num); i++) {
    //     letter = String.fromCharCode(97 + i);
    // }
    let num = Number(string);
    let line = '';
    for (let i = 0; i < num; i++) {
        let firstLetter = String.fromCharCode(97 + i);
        letter = String.fromCharCode(97 + i);
        line += firstLetter;
        for (let j = 0; j < num; j++) {
            let secondLetter = String.fromCharCode(97 + j);
            let secondLine = '';
            secondLine = line + secondLetter;
            for (let k = 0; k < num; k++) {
                let thirdLetter = String.fromCharCode(97 + k);
                thirdLine = secondLine + thirdLetter;
                console.log(thirdLine);
                thirdLine = secondLine;
            }
        }
        line = '';
    }
};

solve('3');