function convertIntoObject(str) {
    let newObj = JSON.parse(str);
    //console.log(newObj);
    let arrTuples = Object.entries(newObj);
    for (let [key, value] of arrTuples) {
        console.log(`${key}: ${value}`);
    }
}

convertIntoObject('{"name": "George", "age": 40, "town": "Sofia"}')
