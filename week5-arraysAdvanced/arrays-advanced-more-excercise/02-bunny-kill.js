function bunny(input) {
    let arrCoordinates = input.pop();
    arrCoordinates = arrCoordinates.split(' ');
    
    // get the coordinates in their own array
    let finalArrCoordinates = [];
    for (let i = 0; i < arrCoordinates.length; i++) {
        bombCoordinates = arrCoordinates[i];
        let bombRowIndex;
        let bombColumnIndex;
        bombCoordinates = bombCoordinates.split(',');
        bombCoordinates = bombCoordinates.map(Number)
        
        for (let j = 0; j < bombCoordinates.length; j++) {
            bombRowIndex = bombCoordinates[0];
            bombColumnIndex = bombCoordinates[1];
        }
        finalArrCoordinates.push(bombRowIndex);
        finalArrCoordinates.push(bombColumnIndex);
    }
    // console.log(finalArrCoordinates);
    
   // Find the bunny in the input matrix
   
}

bunny(['5 10 15 20',
       '10 10 10 10',
       '10 15 10 10',
       '10 10 10 10',
'2,2 0,1']
)