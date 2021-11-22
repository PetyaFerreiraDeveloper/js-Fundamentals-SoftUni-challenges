function bar(input) {
    regEx = /%([A-Z][a-z]+)%.*?<(\w+)>.*?\|(\d+)\|.*?(-?\d+(?:\.\d+)?)\$/
    //let name = /%([A-Z][a-z]+)%/;
    //let product = /<(\w+)>/;
    //let qty = /\|(\d+)\|/;
    //let price = /(-?\d+(?:\.\d+)?\$/;
    let total = 0;
    while (input[0] != 'end of shift') {
        let line = input.shift();
        let match = regEx.exec(line);
        if (match != null) {
            let [_, name, product, qty, price] = match;
            let totalPrice = Number(qty) * Number(price);
            total += totalPrice;
            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${total.toFixed(2)}`);
    
}

bar(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)