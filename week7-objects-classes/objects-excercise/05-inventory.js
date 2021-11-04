// create an empty arr in which to push the heroes
// for loop to take out each line of the initial arr and set its elements in variables
// sort the items arr
// for every loop push the hero info as an object inside the arr
// sort the array by level!
// print in desired format with forEach

function inventory(arr) {
    let heroes = [];
    for (let el of arr) {
        let [name, level, items] = el.split(' / ');
        itemsSorted = items
                        .split(', ')
                        .sort((a, b) => a.localeCompare(b))
                        .join(', ');
        heroes.push({name:name,
                    level:+level,
                    items:itemsSorted});
    }
    let sorted = heroes.sort((a, b) => a.level - b.level);
    sorted.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    });
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )