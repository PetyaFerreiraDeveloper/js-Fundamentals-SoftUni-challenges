function triangle(n) {
    
    for (let i = 1; i <= n; i++) {
        let line = '';
        
        for (let j = 1; j<= i; j++) {
            line += i + ' ';
        }   
        console.log(line)
    }
}

// triangle(5)

function triangle1(n) {
    
    for (let i = 1; i <= n; i++) {
        console.log(`${i} `.repeat(i));
    }
}

triangle1(5)