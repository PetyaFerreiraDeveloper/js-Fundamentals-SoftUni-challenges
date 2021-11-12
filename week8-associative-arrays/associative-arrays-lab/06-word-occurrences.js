function word(arr) {
    let map = new Map();
    for (let word of arr) {
        if (map.has(word)) {
            let value = map.get(word);
            value += 1;
            map.set(word, value)
        } else {
            map.set(word, 1);
        }
    }
    let entries = Array.from(map);
    let sorted = entries.sort((a, b) => b[1] - a[1])

    sorted.forEach(el => console.log(`${el[0]} -> ${el[1]} times`));
}

word(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])