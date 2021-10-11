function pyramid(base, increment) {
    let stoneRequired = 0;
    let marbleRequired = 0;
    let lapisRequired = 0;
    
    let stone = 0;
    let marble = 0;

    let count = 0;

    for (let i = base; i > 0; i = i - 2) {
        count++;
        if (i === 1 || i === 2) {
            gold = i * i;
            break;
        }

        marble = i * 4 - 4;
        stone = (i * i) - marble;
        stoneRequired += stone;

        if (count % 5 === 0) {
            lapisRequired += marble;
        } else {
            marbleRequired += marble;
        }
    }

    console.log(`Stone required: ${Math.ceil(stoneRequired * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbleRequired * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(count * increment)}`);
}

pyramid(11, 1)