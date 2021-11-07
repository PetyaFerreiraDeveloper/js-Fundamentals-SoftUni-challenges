function dictionary(arr) {
    let finalArr = [];
    let finalObj = {};
    for (let line of arr) {
        let lineParsed = JSON.parse(line);
        let tuples = Object.entries(lineParsed);
    
        for (let [term, definition] of tuples) {
            finalObj[term] = definition;
        }
    }
    
    for (let el in finalObj) {
        let obj = {
            'term' : el,
            'definition' : finalObj[el]
        }
        finalArr.push(obj);
    }

    let sorted = finalArr.sort((a, b) => (a.term).localeCompare(b.term));
    sorted.forEach(el =>
        console.log(`Term: ${el.term} => Definition: ${el.definition}`))
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Coffee":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )
