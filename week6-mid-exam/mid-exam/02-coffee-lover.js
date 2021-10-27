function solve(input) {
    let listOfCoffees = input.shift();
    listOfCoffees = listOfCoffees.split(' ')
    let countCommands = input.shift();
    

    for (let i = 0; i < countCommands; i++) {
        let currentRow = input[i];
        currentRow = currentRow.split(' ');
        let command = currentRow[0];

        switch (command) {
            case 'Include':
                let newCoffee = currentRow[1];
                listOfCoffees.push(newCoffee);
                break;
            case 'Remove':
                let choice = currentRow[1];
                let numCoffeesToRemove = Number(currentRow[2]);
                if (numCoffeesToRemove <= listOfCoffees.length) {
                    if (choice === 'first') {
                        listOfCoffees.splice(0, numCoffeesToRemove)
                    } else {
                        let index = listOfCoffees.length - numCoffeesToRemove;
                        listOfCoffees.splice(index, numCoffeesToRemove)
                    }
                }
                break;
            case 'Prefer':
                let coffeeIndex1 = Number(currentRow[1]);
                let coffeeIndex2 = Number(currentRow[2]);
                if (coffeeIndex1 >= 0 && coffeeIndex2 >= 0 && coffeeIndex1 < listOfCoffees.length && coffeeIndex2 < listOfCoffees.length) {
                    if (coffeeIndex1 < coffeeIndex2) {   
                        let secondRemovedCoffee = listOfCoffees.splice(coffeeIndex2, 1);
                        let firstRemovedCoffee = listOfCoffees.splice(coffeeIndex1, 1, secondRemovedCoffee);
                        listOfCoffees.splice(coffeeIndex2, 0, firstRemovedCoffee);
                    } else {
                        let secondRemovedCoffee = listOfCoffees.splice(coffeeIndex1, 1);
                        let firstRemovedCoffee = listOfCoffees.splice(coffeeIndex2, 1, secondRemovedCoffee);
                        listOfCoffees.splice(coffeeIndex1, 0, firstRemovedCoffee);
                    }
                }
                break;
            case 'Reverse':
                listOfCoffees.reverse()
                break;

        }

    }

    console.log('Coffees:');
    console.log(listOfCoffees.join(' '));
}

solve(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])


