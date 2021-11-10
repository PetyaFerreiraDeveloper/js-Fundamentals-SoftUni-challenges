function book(arr) {
    let obj = {};
    for (let el of arr) {
        let [name, value] = el.split(' ');
        obj[name] = value;
    }

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

book(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)