function storage(arr) {
    let map = new Map();
    for (let el of arr) {
        let [key, value] = el.split(' ');
        value = Number(value);
        if (!map.has(key)) {
            map.set(key, value);
        } else {
            let currValue = Number(map.get(key));
            map.set(key, value + currValue);
        }
    }
    for (let [key, value] of map) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']

)