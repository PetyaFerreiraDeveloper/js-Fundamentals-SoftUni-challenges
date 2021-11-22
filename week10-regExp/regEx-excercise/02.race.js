function race(input) {
    let lettersPattern = /[A-Za-z]/g;
    let distancePattern = /\d/g;
    // parse the input take the participants and add their names in an object with values 0
    let participants = {};
    let list = input.shift();
    list = list.split(', ');
    list.forEach(el => participants[el] = 0);
    // loop through the rest and take out the names and distances
    while (input[0] !== 'end of race') {
        let sum = 0;
        let line = input.shift();
        let name = line.match(lettersPattern);
        name = name.join('');
        let numbers = line.match(distancePattern);
        numbers = numbers.map(Number);
        
        for (let num of numbers) {
            sum += num;
        }
        if (participants.hasOwnProperty(name)) {
            participants[name] += sum;
        }
    }
    let tuples = Object.entries(participants);
    let sorted = tuples.sort((a, b) => b[1] - a[1]);
    let final = sorted.splice(0, 3)
    
    if (final.length > 0) {
        console.log(`1st place: ${final[0][0]}`);
    }
    if (final.length > 1) {
        console.log(`2nd place: ${final[1][0]}`);
    }
    if (final.length > 2) {
        console.log(`3rd place: ${final[2][0]}`);
    }
    
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']

)