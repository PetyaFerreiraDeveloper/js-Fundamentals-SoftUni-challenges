function solve(input) {
    let neededExperience = input.shift();
    let numBattles = input.shift();
    let experience = 0;
    let bool = true;
    for (let i = 0; i < numBattles; i++) {
        let currentExperience = input[i];
        if ((i + 1) % 3 === 0) {
            currentExperience = 1.15 * currentExperience;
        } else if ((i + 1) % 5 === 0) {
            currentExperience = 0.9 * currentExperience;
        } else if ((i + 1) % 15 === 0){
            currentExperience = 1.05 * currentExperience;
        }
        experience += currentExperience;
        if (experience >= neededExperience) {
            console.log(`Player successfully collected his needed experience for ${i + 1} battles.`);
            bool = false;
            break;
        }
    }

    if (bool) {
        console.log(`Player was not able to collect the needed experience, ${(neededExperience - experience).toFixed(2)} more needed.`);
    }
}

solve([400,
    5,
    50,
    100,
    200,
    100,
    20])
    
    
    
    