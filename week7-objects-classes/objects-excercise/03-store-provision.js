function store(inventory, delivery) {
    // loop through the first arr and add all its elements in an object with key: name and value: quantity
    // loop through second arr, check if the element does not exist as a key in the object and add it with a value of 0
    // finish with adding the value of each element from the second array to the value of it in the object
    // print the object with for in loop

    let inventoryL = inventory.length;
    let deliveryL = delivery.length;
    let obj = {};

    for (let i = 0; i < inventoryL; i += 2) {
        obj[inventory[i]] = Number(inventory[i + 1]);
    }

    for (let i = 0; i < deliveryL; i += 2) {
        if (!obj.hasOwnProperty(delivery[i])) {
            obj[delivery[i]] = 0
        }

        obj[delivery[i]] += Number(delivery[i + 1]);
    }

    for (let stock in obj) {
        console.log(`${stock} -> ${obj[stock]}`);
    }

}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )