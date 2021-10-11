function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let i = 2; i <= lostFights; i++) {
        if (i % 12 === 0) {
            expenses = expenses + armorPrice + shieldPrice + swordPrice + helmetPrice;
        } else if (i % 6 === 0) {
            expenses = expenses + shieldPrice + swordPrice + helmetPrice;
        } else if (i % 3 === 0) {
            expenses = expenses + swordPrice;
        } else if (i % 2 === 0) {
            expenses = expenses + helmetPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
    
}

gladiator(23,
    12.50,
    21.50,
    40,
    200
    
    );
