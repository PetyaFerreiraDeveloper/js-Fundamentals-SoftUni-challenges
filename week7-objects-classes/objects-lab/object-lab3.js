// object iteration with for in cycle

function objIter() {
    let person = {
        name: 'Arthur',
        age: 3
    }
    for (let per in person) {
        console.log(per);
        console.log(person[per]);
    }
}

objIter()
