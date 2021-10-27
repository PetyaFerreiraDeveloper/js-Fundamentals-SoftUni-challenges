function printCity(city) {
    let cityEntries = Object.entries(city);
    for (let [cityKey, cityValue] of cityEntries) {
        console.log(`${cityKey} -> ${cityValue}`);
    }
}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)