function neighbor(arr) {
    let neighborhoods = arr.shift().split(', ')
    let map = new Map();
    
    for (let name of neighborhoods) {
        map.set(name, []);
    }

    for (let line of arr) {
        let [neighborhood, name] = line.split(' - ');
        if (map.has(neighborhood)) {
            let residents = map.get(neighborhood);
            residents.push(name);
            map.set(neighborhood, residents)
        }
    }
    let entries = Array.from(map);
    let sorted = entries.sort((a, b) => b[1].length - a[1].length);
    sorted.forEach(el => {
        console.log(`${el[0]}: ${el[1].length}`);
        for (let name of el[1]) {
            console.log(`--${name}`);
        }
    })
    
}

neighbor(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']


)