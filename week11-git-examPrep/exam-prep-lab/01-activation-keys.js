function active(input) {
    let key = input.shift();
    
    while (input[0] != 'Generate') {
        let line = input.shift();
        line = line.split('>>>');
        let command = line[0];
        
        switch (command) {
            case 'Slice': 
                        let firstPart = key.slice(0, Number(line[1]));
                        let lastPart = key.slice(Number(line[2]));
                        key = firstPart + lastPart;
                        console.log(key);
                        break;
            case 'Flip':
                        let before = key.slice(0, Number(line[2]));
                        let after = key.slice(Number(line[3]));
                        let middle = key.slice(Number(line[2]), Number(line[3]));
                        if (line[1] === 'Upper') {
                            middle = middle.toUpperCase();
                        } else if (line[1] === 'Lower') {
                            middle = middle.toLowerCase();
                        }
                        key = before + middle + after;
                        console.log(key);
                        break;
            case 'Contains':
                        if (key.includes(line[1])) {
                            console.log(`${key} contains ${line[1]}`);
                        } else {
                            console.log('Substring not found!');
                        }
                        break;
        }
    }
    console.log(`Your activation key is: ${key}`);
}

active((["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])
)