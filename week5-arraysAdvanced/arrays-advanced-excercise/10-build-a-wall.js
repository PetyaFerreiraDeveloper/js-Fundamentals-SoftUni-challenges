function build(input) {
    if (input.length <= 2000) {
        let inputSorted = input.sort((a, b) => a - b);

        inputSorted = inputSorted.map(el => +el);
        inputSorted = inputSorted.filter(el => el < 30)
        
        let lowestWall = inputSorted[0];
        let countFeet = 0;
        let concretePerFoot = 195;
        let dailyConcrete = 0;
        let totalConcrete = 0;
        let totalPrice = 0;
        let bool = false;
        let countToRemove = 0;
        let finalArr = []
        
        for (let i = lowestWall; i < 30; i++) {
            countFeet = 0;
            dailyConcrete = 0;
            countToRemove = 0;
            for (let j = 0; j < inputSorted.length; j++) {
                countFeet++;
                inputSorted[j] += 1;
                if (inputSorted[j] === 30) {
                    countToRemove++;
                    bool = true;
                }
            }
            if (bool) {
                for (let i = 0; i < countToRemove; i++) {
                    inputSorted.pop();
                }
            }
            dailyConcrete = countFeet * concretePerFoot;
            totalConcrete += dailyConcrete;
            finalArr.push(dailyConcrete);
        } 
    
        totalPrice = totalConcrete * 1900;
        console.log(finalArr.join(', '));
        console.log(`${totalPrice} pesos`);
    }
}

build([17, 22, 17, 19, 17])