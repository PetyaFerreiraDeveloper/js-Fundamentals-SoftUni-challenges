function solve(num) {
    for (let i = 1; i <= num; i++) {
        let check = i.toString();
        let special = 'False';
        let sum = 0;
        for (let j = 0; j < check.length; j++) {
            sum += Number(check[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            special = 'True';
        }
        console.log(`${i} -> ${special}`)
    }

};

solve(20);