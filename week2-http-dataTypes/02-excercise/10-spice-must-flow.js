function spice(startYield) {
    let totalYield = 0;
    let countDays = 0;
    let cost = 26;
    for (let i = startYield; i >=100; i = i - 10) {
        if ((totalYield + i) <= cost) {
            cost = totalYield;
        }
        totalYield = totalYield + i - cost;
        countDays++;
    }
    if (totalYield <= cost) {
        cost = totalYield;
    }
    totalYield -= cost;
    console.log(countDays);
    console.log(totalYield)
}

spice(450)