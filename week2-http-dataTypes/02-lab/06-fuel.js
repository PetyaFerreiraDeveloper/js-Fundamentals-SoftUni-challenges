function fuel(distance, passengers, price) {
    let emptyBusFuelL = (distance / 100) * 7;
    let extraBusFuelL = 0.1 * passengers;
    let totalFuelL = emptyBusFuelL + extraBusFuelL;
    let neededMoney = totalFuelL * price;
    console.log(`Needed money for that trip is ${neededMoney} lv.`)
}

fuel(90, 14, 2.88);