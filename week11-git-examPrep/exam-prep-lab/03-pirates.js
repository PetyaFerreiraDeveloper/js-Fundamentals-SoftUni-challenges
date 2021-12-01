function pirate(input) {
    input.pop();
    let sailIndex = input.indexOf('Sail');
    // remove the end element
    // find the index of sail
    // split the array in two parts - first up to Sail, second part all the rest of elements
    let townsInput = input.slice(0, sailIndex);
    let actionsInput = input.slice(sailIndex + 1);
    // split each line from the first part by || and add the data into an empty object
    let towns = {};
    for (let town of townsInput) {
        let line = town.split('||');
        let [name, townPopulation, townGold] = line;
        if (!towns[name]) {
            towns[name] = {
                population: 0,
                gold: 0
            };
        }
        towns[name].population += Number(townPopulation);
        towns[name].gold += Number(townGold);
    }

    for (let el of actionsInput) {
        let line = el.split('=>');
        let command = line.shift();
        let town = line.shift();
        if (command === 'Plunder') {
            let killed = Number(line[0]);
            let stolenGold = Number(line[1])
            towns[town].population -= killed;
            towns[town].gold -= stolenGold;
            console.log(`${town} plundered! ${stolenGold} gold stolen, ${killed} citizens killed.`);
            if (towns[town].population <= 0 || towns[town].gold <= 0) {
                delete towns[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else if (command === 'Prosper') {
            let addedGold = Number(line[0]);
            if (addedGold < 0) {
                console.log("Gold added cannot be a negative number!");
            } else {
                towns[town].gold += addedGold;
                console.log(`${addedGold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
            }
        }
    }
    
    let townsArr = Object.entries(towns);
    if (townsArr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${townsArr.length} wealthy settlements to go to:`);
        townsArr.sort((townA, townB) => {
            let townAName = townA[0];
            let townBName = townB[0];
            let townAProperties = townA[1];
            let townBProperties = townB[1];

            if (townAProperties.gold !== townBProperties.gold) {
                return townBProperties.gold - townAProperties.gold
            } else {
                return townAName.localeCompare(townBName)
            }
        })

        for (let line of townsArr) {
            let currentTown = line[0];
            let currentTownProperties = line[1];    
            console.log(`${currentTown} -> Population: ${currentTownProperties.population} citizens, Gold: ${currentTownProperties.gold} kg`);
        }
    }
}

pirate(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]
)
