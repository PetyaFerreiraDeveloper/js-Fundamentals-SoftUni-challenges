function emoji(input) {
    input = input[0];
    let regExNum = /\d/g;
    let regEmoji = /(\*\*|\:\:)([A-Z][a-z][a-z]+)\1/g
    let match = input.match(regExNum);
    let cool = 1;
    for (let el of match) {
        cool *= Number(el);
    }
    console.log(`Cool threshold: ${cool}`);
    let allEmojis = [];
    let coolEmojis = [];
    let fullEmoji;
    while ((fullEmoji = regEmoji.exec(input)) !== null) {
        allEmojis.push(fullEmoji[0]);
        let nameEmoji = fullEmoji[2];
        let sumEmoji = 0;
        for (let ch of nameEmoji) {
            sumEmoji += ch.charCodeAt(0);
        }
        if (sumEmoji > cool) {
            coolEmojis.push(fullEmoji[0]);
        } 
    }
    console.log(`${allEmojis.length} emojis found in the text. The cool ones are:`);
    for (let em of coolEmojis) {
        console.log(em);
    }
}

emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])
