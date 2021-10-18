function party(arr) {
    let guestList = [];
    for (let i = 0; i < arr.length; i++) {
        let newRow = arr[i];
        let rowArr = newRow.split(' ');
        let name = rowArr[0];
        if (!guestList.includes(name) && !rowArr.includes('not')) {
            guestList.push(name);
        } else if (!guestList.includes(name) && rowArr.includes('not')) {
            console.log(`${name} is not in the list!`)
        } else if (guestList.includes(name) && rowArr.includes('not')) {
            let indexOfName = guestList.indexOf(name);
            guestList.splice(indexOfName, 1);
        } else {
            console.log(`${name} is already in the list!`)
        }
    }
    for (guest of guestList) {
        console.log(guest)
    }
}

party(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)