function words(arr) {
    // 1. get the words to search for in an arr
    // 2. loop through the array and create a map with the word and count 0
    // 3. split the rest into an arr
    // 4. loop through it and if you find the word change the value of the key in the object with one
    let wordsToSearchFor = arr.shift().split(' ');
    let map = new Map();
    for (let word of wordsToSearchFor) {
        map.set(word, 0);
    }
    for (let el of arr) {
        if (map.has(el)) {
            let value = map.get(el);
            value++;
            map.set(el, value);
        }
    }
    let tuples = Array.from(map);
    let sorted = tuples.sort((a, b) => b[1] - a[1])
    sorted.forEach(el => console.log(`${el[0]} - ${el[1]}`))
    
}

words([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    
    )
