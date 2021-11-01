function towns(arr) {
    
    let allTowns = {};
    for (let rowElement of arr) {
        let rowArr = rowElement.split(' | ');
        let town = rowArr[0];
        let latitude = Number(rowArr[1]).toFixed(2);
        let longitude = Number(rowArr[2]).toFixed(2);
        allTowns.town = town;
        allTowns.latitude = latitude;
        allTowns.longitude = longitude;
        console.log(allTowns);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)