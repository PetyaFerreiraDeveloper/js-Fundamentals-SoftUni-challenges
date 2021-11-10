function address(arr) {
    let obj = {};
    for (let el of arr) {
        let [name, address] = el.split(':');
        obj[name] = address;
    }
    let tuples = Object.entries(obj);
    let sorted = tuples.sort((a, b) => a[0].localeCompare(b[0]))
    sorted.forEach(el => console.log(`${el[0]} -> ${el[1]}`));
}

address(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']

)