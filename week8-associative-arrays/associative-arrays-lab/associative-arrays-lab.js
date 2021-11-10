// Map collection - storing a key, value pairs in the insertion order
let map = new Map();

// the .set(key, value) adds a new key-vaæue pair
map.set('firstKey', 'one');
map.set('secondKey', 'two');
map.set('thirdKey', 'three')

// a for-of loop returns an array of key, value pairs for each iteration
for (let el of map) {
    //console.log(el);
}

// the .get(key) returns the value of the given key
let first = map.get('firstKey')
// console.log(first);

// Find the Number of elements in a map
let size = map.size;
//console.log(size);

// check if a map has a given key
let result = map.has('firstKey')
//console.log(result);

// delete a key-value pair
// map.delete('firstKey');
// console.log(map);

// remove all key-value pairs form a map

//map.clear()
// console.log(map);

// just like in object we can use Array.from(map.entries()), Array.from(map.keys()), Array.from(map.values())
let entries = Array.from(map.entries());
// this is exactly the same as. They both return an array of arrays:
let entries2 = Array.from(map);
//console.log(entries);
//entries.forEach(el => console.log(el));
let keys = Array.from(map.keys());
//console.log(keys);
let values = Array.from(map.values());
//console.log(values);
let check = Array.from(map);
check.forEach(el => console.log(el));

// lets print the map. Way 1
let iterable = map.keys()
for (let key of iterable) {
    //console.log(`${key} => ${map.get(key)}`);
}

// lets print the map. Way 2
for (let [key, value] of map) {
    //console.log(`${key} => ${value}`);
}
