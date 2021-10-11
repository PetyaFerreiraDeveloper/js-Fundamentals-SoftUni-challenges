function login(input) {
    
    let username = input[0];
    let password = input[1];
    let index = 1;
    let passReversed = '';
    let bool = true;

    while (username !== passReversed && index !== 5) {
        
        passReversed = '';
        let passSplit = password.split('');
        for (let i = password.length - 1; i >= 0; i--) {
            let letter = passSplit[i];
            passReversed += letter;
        }

        if (username === passReversed) {
            break;
        } else if (index === 4){
            console.log(`User ${username} blocked!`);
            bool = false;
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
        index++;
        // bool = false;
        password = input[index];
    }
    if (index === 5) {
        console.log(`User ${username} blocked!`);
        bool = false;
    }

    if (bool) {
        console.log(`User ${username} logged in.`)
    }
}

login(['Acer','login','go','let me in','recA'])