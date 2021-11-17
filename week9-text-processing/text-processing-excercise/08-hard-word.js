function hard(arr) {
    // split the letter by character. 
    // Check each element for _ and increase count
    // otherwise chech if el is not _ anymore and count is more than 0
    // loop through the words and find the word with the length === count
    // create a template to use for replacement
    // find the template in letter and replace it with the word
    let letter = arr[0];
    let words = arr[1];
    let count = 0;
    for (let ch of letter) {
        if (ch === '_') {
            count++;
        } else if (ch !== '_' && count > 0) {
            for (let word of words) {
                if (word.length === count) {
                    let template = '_'.repeat(count);
                    letter = letter.replace(template, word);
                    count = 0;
                }
            }
        }
    }
    console.log(letter);
}

hard(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)