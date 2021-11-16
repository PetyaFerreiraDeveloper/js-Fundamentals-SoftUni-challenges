function card(input) {
    let obj = {};
    for (let row of input) {
        let [name, cards] = row.split(': ');
        let cardsArr = cards.split(', ');
        if (!obj.hasOwnProperty(name)) {
            obj[name] = [];
        }
        let sumPoints = 0;
        for (let el of cardsArr) {
            
            let [power, type] = el.split('');
            if (power.charCodeAt(0) > 49 && power.charCodeAt(0) < 58) {
                power = Number(power);
            } else if (power === '10') {
                power = 10;
            } else if (power === 'J') {
                power = 11;
            } else if (power === 'Q') {
                power = 12;
            } else if (power === 'K') {
                power = 13;
            } else if (power === 'A') {
                power = 14;
            }
            
            // if (!obj[name].includes(el)) {
            //     obj[name].push(el);
            // }
        }
    }
    
    //console.log(obj);
}

card([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )