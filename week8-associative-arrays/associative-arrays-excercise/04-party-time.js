function party(arr) {
    // loop through el in arr, while el !== 'PARTY'
    // add el to map
    // arr.shift(el)
    // after the loop shift again to remove party
    // loop through the rest of the arr and delete the elements from map
    // count map size and print map
    let map = new Map();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'PARTY') {
            break
        } else {
            map.set(arr[i]);
            count++;
        }
    }
    for (let i = 0; i <= count; i++) {
        arr.shift()
    }
    
    for (let el of arr) {
        if (map.has(el)) {
            map.delete(el);
        }
    }
    let size = map.size;
    let keys = Array.from(map.keys());
    let sorted = keys.sort((a, b) => a.localeCompare(b))
    console.log(size);
    for (let el of sorted) {
        console.log(el);
    }
}

party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)