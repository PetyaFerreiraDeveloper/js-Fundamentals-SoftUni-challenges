function town(arr) {

    for (let rowElement of arr) {
        let [town, latitude, longitude] = rowElement.split(' | ');
        
        console.log(town);
    }
}

town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)