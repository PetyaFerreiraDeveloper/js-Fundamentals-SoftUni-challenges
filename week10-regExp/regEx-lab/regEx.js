// ? a group or condition will repeat exactly Zero or One times
// if we want a whole or floating number:
let num = /(?<price>\d+(?:\.\d+)?)/g
// ?: at the front of a group, will remove it from the final array with groups, but it is still a valid condition for the regex

// naming a group


// USING MATCH TO RETURN AN ARRAY OF THE MATCHES
let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regexp);
// console.log(matches); // it returns an array of the matches. if no match is found it returns a null

// USING EXEC TO RETURN AN ARRAY OF THE MATCHES AND THE GROUPS

function phone(str) {
    let regExp = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let validNum;
    let numbers = [];
    while((validNum = regExp.exec(str)) !== null) {
        numbers.push(validNum[0]);
        
    }
    console.log(numbers);
}

// phone("+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222")

