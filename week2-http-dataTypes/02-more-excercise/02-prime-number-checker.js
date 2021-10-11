function primeNum(num) {
    if (num <= 0) {
        console.log('false');
    }
    let bool = true;
    for (let i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            console.log('false');
            bool = false;
            break;
        } 
    }

    if (bool) {
        console.log('true')
    }
}

primeNum(0)