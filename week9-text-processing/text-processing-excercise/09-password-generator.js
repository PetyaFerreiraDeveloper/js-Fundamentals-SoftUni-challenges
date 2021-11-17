function pass(arr) {
    let first = arr[0];
    let second = arr[1];
    let third = arr[2];
    let concatPass = first + second;
    
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let index = 0;
   
    for (let ch of concatPass) {
        if (vowels.includes(ch)) {
            let replacementLetter = third[index].toUpperCase();
            concatPass = concatPass.replace(ch, replacementLetter);
            index++;
            if (index >= third.length) {
                index = 0;
            }
        }
    }
    concArr = concatPass.split('');
    concArr.reverse();
    let password = concArr.join('');
    console.log(`Your generated password is ${password}`);

}

pass([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]
    
    )