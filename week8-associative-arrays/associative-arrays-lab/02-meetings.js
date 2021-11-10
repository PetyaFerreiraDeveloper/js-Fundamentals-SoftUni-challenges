function meet(arr) {
    let obj = {};
    for (let el of arr) {
        let [weekday, name] = el.split(' ');

        if (obj.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            obj[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for(let el in obj) {
        console.log(`${el} -> ${obj[el]}`);
    }
}

meet(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']

);