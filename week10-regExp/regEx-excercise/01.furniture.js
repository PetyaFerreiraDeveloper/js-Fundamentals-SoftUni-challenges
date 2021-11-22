function furniture(input) {
    let regEx = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furniture = [];
    let total = 0;
    // parse input until line purchase
    // for each line check regex pattern
    while (input[0] !== 'Purchase') {
    
        let line = input.shift();
        // if match store furniture and add cost to total
        let match = regEx.exec(line);
        if (match !== null) {
            let {name, price, qty} = match.groups;
            price = Number(price);
            qty = Number(qty);
            total += price * qty;
            furniture.push(name);
        }
    }
    
    console.log('Bought furniture:');
    furniture.forEach(el => console.log(el));
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<3!3',
'>>Sofa<<3!3',
'>>Sofa<<3!3',
'Purchase']


)