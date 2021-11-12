function odd(str) {
    // 1. split the str into an arr
    // 2. create an obj 
    // 3. loop through the arr, convert each el into smallercase and put it in the obj
    // 4. if the obj already has the element increase the value with 1
    // 5. turn the object into an array and filter only the uneven number of words
    let arrWords = str.split(' ');
    let map = new Map();
    for (let word of arrWords) {
        word = word.toLowerCase();
        if (map.has(word)) {
            let value = map.get(word);
            value++;
            map.set(word, value)
        } else {
            map.set(word, 1);
        }
    }
    let newArr = []
    for (let [key, value] of map) {
        if (value % 2 !== 0) {
            newArr.push(key); 
        }
    }
    console.log(newArr.join(' '));
    
}

odd('Cake IS SWEET is Soft CAKE sweet Food')