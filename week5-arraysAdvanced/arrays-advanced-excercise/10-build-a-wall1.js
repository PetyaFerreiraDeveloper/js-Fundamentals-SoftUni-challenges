function build(input) {
    let arr = input.map(Number).sort((a, b) => a - b);
    
    let smallestSection = arr[0];
    const concretePerFoot = 195;
    const concreteCost = 1900;

    let concreteNeededDaily = [];

    while (30 - smallestSection !== 0) {
        let concreteBuilt = 0;
        for (let section of arr) {
            if (section < 30) {
                concreteBuilt += concretePerFoot;
                arr.splice(arr.indexOf(section), 1, section + 1);
            }
        }
        smallestSection = arr[0];
        concreteNeededDaily.push(concreteBuilt);
    }

    console.log(concreteNeededDaily.join(', '));
    console.log(`${concreteNeededDaily.reduce((sum, el) => sum + (el * concreteCost), 0)} pesos`);
}

build([21, 25, 28])