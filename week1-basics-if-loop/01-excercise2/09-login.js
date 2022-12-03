function login(input) {
    let username = input.shift();
    let passwordTrue = '';
    for (let i = username.length - 1; i >= 0 ; i--) {
        passwordTrue += username[i]; 
    }
    for(let i = 0; i <= 3; i++) {
        if(input[i] !== passwordTrue) {
            if(i === 3) {
                console.log(`User ${username} blocked!`);
            } else {
                console.log('Incorrect password. Try again.');
            }
        } else {
            console.log(`User ${username} logged in.`);
            return;
        }
    }
}

// login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['Acer','login','go','let me in','recA'])