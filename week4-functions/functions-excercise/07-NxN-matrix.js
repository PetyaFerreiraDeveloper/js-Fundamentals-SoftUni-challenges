function matrix(num) {  
    for (let i = 0; i < num; i++) {
        row = ''
        for (let j = 0; j < num; j++) {
            row += ` ${num}`
        }
        console.log(row)
    }
}

matrix(7)