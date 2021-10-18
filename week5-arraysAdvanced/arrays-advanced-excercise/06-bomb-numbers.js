function bomb(sequence, bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    
    for (let i = 0; i < sequence.length; i++) {
        if (sequence.includes(bombNumber)) {
            let bombIndex = sequence.indexOf(bombNumber)
            if (bombIndex - bombPower < 0) {
                sequence.splice(0, bombIndex + bombPower + 1)
            } else {
                sequence.splice(bombIndex - bombPower, bombPower * 2 + 1)
            }
        }
    }
    let result = sequence.reduce((sum, el) => {
        return sum + el;
    },0)
    console.log(result)
}

bomb([1, 4, 4, 2, 8, 7, 1],
    [9, 3]
    
    )