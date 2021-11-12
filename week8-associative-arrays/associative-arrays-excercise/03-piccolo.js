function piccolo(arr) {
    // create empty parking map
    // loop through arr and split str
    // if el[0] is IN set el[1], 0 in parkingMap
    // if OUT - map.delete(el[1]) 
    // make Array.from(map.keys())
    // sort alphabetically
    let map = new Map();
    for (let el of arr) {
        let [status, carNum] = el.split(', ');
        if (status === 'IN') {
            map.set(carNum)
        } else {
            map.delete(carNum)
        }
    }
    let keys = Array.from(map.keys());
    let sorted = keys.sort((a, b) => a.localeCompare(b))
    if (sorted.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let num of sorted) {
            console.log(num);
        }
    }

}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']

)