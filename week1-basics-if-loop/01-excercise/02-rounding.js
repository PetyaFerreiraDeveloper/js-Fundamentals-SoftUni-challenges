function roundMe(num, round) {
    if (round > 15) {
        round = 15;
    }
    let newNum = Number(num.toFixed(round));
    console.log(parseFloat(newNum));
}

roundMe(10.5,3);