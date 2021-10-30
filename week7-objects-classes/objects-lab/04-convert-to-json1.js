function createObj(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }

    let personJSON = JSON.stringify(person);
    console.log(person);
    console.log(personJSON);

}

createObj('George', 'Jones', 'Brown')