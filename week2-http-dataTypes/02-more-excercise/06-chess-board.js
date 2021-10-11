function chess(num) {
    let color = ''
    let counter = 0;
    let innerTxt = ''
    let innerTxt1 = '<span class="'
    let innerTxt2 = '"></span>'

    console.log('<div class="chessboard">')
    for (let i = 0; i < num; i++) {
        console.log(`  <div>`)
        let innerTxt = ''
        for (let j = 0; j <num; j++) {
            
            if (counter % 2 === 0) {
                color = 'black'
            } else {
                color = 'white'
            }
            innerTxt += 
            `    ${innerTxt1}${color}${innerTxt2}
`
            counter++;
        }
        if(num % 2 === 0) {
            counter++
        }
        console.log(innerTxt)
        console.log(`  </div>`)
    }
    console.log('</div>')
}

chess(3)