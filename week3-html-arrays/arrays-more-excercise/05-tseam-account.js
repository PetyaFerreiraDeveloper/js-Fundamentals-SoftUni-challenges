function tseam(arr) {
    let arrL = arr.length;
    let tseamAccount = arr[0];
    let tseamAccountArr = tseamAccount.split(' ');
    // console.log(tseamAccountArr);
    function arrayRemove(arrGames, removedGame) { // this function returns an array, after we have removed a particular element
        return arrGames.filter(function(ele) {
            return ele != removedGame;
        })
    }

    for (let i = 1; i < arrL - 1; i++) {
        let currElement = arr[i]; // string
        let currElementArr = currElement.split(' ');
        let instruction = currElementArr[0];
        let game = currElementArr[1];
        
        switch (instruction) {
            case 'Install':
                if (!tseamAccountArr.includes(game)) {
                    tseamAccountArr.push(game);
                };
                break;
            case 'Uninstall':
                if (tseamAccountArr.includes(game)) {
                    tseamAccountArr = arrayRemove(tseamAccountArr, game)
                };
                break;
            case 'Update':
                if (tseamAccountArr.includes(game)) {
                    tseamAccountArr = arrayRemove(tseamAccountArr, game);
                    tseamAccountArr.push(game);
                };
                break;
            case 'Expansion':
                let gameArr = game.split('-');
                if (tseamAccountArr.includes(gameArr[0])) {
                    for (let i = 0; i < tseamAccountArr.length; i++) {
                        if (tseamAccountArr[i] === gameArr[0]) {
                            let newGameName = gameArr.join(':')
                            tseamAccountArr.splice(i+1, 0, newGameName);
                        }
                    }
                }
                break;
        }
    }
    console.log(tseamAccountArr.join(' '));
}

tseam(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']

)