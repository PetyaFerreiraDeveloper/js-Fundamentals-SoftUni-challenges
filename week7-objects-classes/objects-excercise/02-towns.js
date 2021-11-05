function town(arr) {
    let towns = {};
    for (let line of arr) {
        let tableRow = line.split(' | ');
        let [town, latitude, longitude] = tableRow;
        towns.town = town;
        towns.latitude = (Number(latitude)).toFixed(2);
        towns.longitude = (Number(longitude)).toFixed(2);
        console.log(towns);
    }
}

town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)