function solve(text, number) {
    let trimmedText = text.substring(0, number);
    let placeToStop = 0;
    for (let i = trimmedText.length; i >= 0; i--) {
        if (trimmedText[i] === ' ') {
            placeToStop = i;
            break;
        }
    }
    console.log(trimmedText);
    let almostFinalText = trimmedText.substring(0, placeToStop)
    let finalText = almostFinalText.padEnd(placeToStop + 3, '...')  
    console.log(finalText);
}

solve('Optagelserne byder på en række bizarre scener, hvor Yoko bl.a. skal afprøve en kvalmefremprovokerende forlystelse, forsøge at fange en mytisk fisk og slippe en ged løs i bjergene.', 18)

// let text = 'He passed away';
// console.log(text.padEnd(17, '.'));
