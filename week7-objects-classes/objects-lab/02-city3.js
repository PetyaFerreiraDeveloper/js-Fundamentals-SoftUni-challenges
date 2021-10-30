function city(input) {
    let newArr = Object.entries(input);
    let newArrL = newArr.length;

    for (let i = 0; i < newArrL; i++) {
        //console.log(newArr[i]);
        let currentTuple = newArr[i];
        let tupleKey = currentTuple[0];
        let tupleValue = currentTuple[1];
        console.log(`${tupleKey} -> ${tupleValue}`)
    }
    
}

    
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)