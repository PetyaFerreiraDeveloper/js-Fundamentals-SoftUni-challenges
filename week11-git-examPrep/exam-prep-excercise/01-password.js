function password(input) {
    input.pop();
    let sentence = input.shift();
    for (let line of input) {
        let lineArr = line.split(' ');
        let currentCommand = lineArr[0];
        switch (currentCommand) {
            case 'TakeOdd': 
                        let newArr = [];
                        for (let i = 0; i < sentence.length; i++) {
                            if (i % 2 !== 0) {
                                newArr.push(sentence[i]); 
                            }
                        };
                        sentence = newArr.join('');
                        console.log(sentence);
                        break;
            case 'Cut': 
                        let index = Number(lineArr[1]);
                        let countEl = Number(lineArr[2]);
                        let beforeStr = sentence.substring(0, index);
                        let endStr = sentence.substring(index + countEl);
                        sentence = beforeStr + endStr;
                        console.log(sentence);
                        break;
            case 'Substitute':
                        let checkSub = lineArr[1];
                        let replaceWith = lineArr[2];
                        if (sentence.includes(checkSub)) {
                            while (sentence.includes(checkSub)) {
                                sentence = sentence.replace(checkSub, replaceWith);
                            }
                            console.log(sentence);
                        } else {
                            console.log("Nothing to replace!");
                        }
                        break;
        }
    }
    console.log(`Your password is: ${sentence}`);
}

password(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"])

