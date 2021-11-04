function dictionary(arr) {

    let dictArr = [];
    let resultDictArr = [];
    let dictObj = {}
    for (let el of arr) {
        let line = JSON.parse(el);
        let tuples = Object.entries(line);
        for (let [term, desctription] of tuples) {
            dictArr.push(term);
            dictArr.push(desctription);
        }
    }
    let dictArrL = dictArr.length;

    for (let i = 0; i < dictArrL; i += 2) {
        dictObj[dictArr[i]] = dictArr[i + 1];
    }
    
    for (let obj in dictObj) {
        resultDictArr.push({
            term:obj,
            description:dictObj[obj]
        });
    }
    let sorted = resultDictArr.sort((a, b) => (a.term).localeCompare(b.term));
    sorted.forEach(line => {
        console.log(`Term: ${line.term} => Definition: ${line.description}`);
    });
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Coffee":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )