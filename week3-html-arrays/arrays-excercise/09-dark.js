function dark(arr) {
    let newStr = arr.toString();
    let newArr = newStr.split('|')
    let coins = 0;
    let health = 100;
    let bestRoom = 1;
    let bool = true;
    for (let i = 0; i < newArr.length; i++) {
        let currentRoom = newArr[i].split(' ');
        if (currentRoom[0] === 'potion') {
            if (health < 100) {
                let oldHealth = health;
                health = health + Number(currentRoom[1]);
                
                if (health > 100) {
                    let heal = 100 - oldHealth;
                    console.log(`You healed for ${heal} hp.`)
                    health = 100;
                } else {
                    console.log(`You healed for ${currentRoom[1]} hp.`);
                }
                console.log(`Current health: ${health} hp.`)
            }
            bestRoom++;
        } else if (currentRoom[0] === 'chest') {
            coins += Number(currentRoom[1]);
            console.log(`You found ${currentRoom[1]} coins.`)
            bestRoom++;
        } else {
            health -= Number(currentRoom[1]);
            if (health > 0) {
                console.log(`You slayed ${currentRoom[0]}.`);
                bestRoom++;
            } else {
                console.log(`You died! Killed by ${currentRoom[0]}.`);
                console.log(`Best room: ${bestRoom}`)
                bool = false;
                break;
            }
        }
    }
    if (bool) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

dark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])