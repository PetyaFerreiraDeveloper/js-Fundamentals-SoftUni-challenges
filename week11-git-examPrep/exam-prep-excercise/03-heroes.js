function heroes(input) {
    // parse the input and divide it into two arrays
    let count = input.shift();
    input.pop();
    // first array heroes 
    let heroArr = input.splice(0, count);
    // create an object with the heroes and their points 
    let heroesObj = {};
    for (let hero of heroArr) {
        let line = hero.split(' ');
        let heroName = line[0];
        let heroHP = Number(line[1]);
        let heroMP = Number(line[2]);
        heroesObj[heroName] = {
            'hp': heroHP,
            'mp': heroMP
        }
    }
    // go through each line in the other commands array and execute the commands with switch
    for (let el of input) {
        let line = el.split(' - ');
        let command = line[0];
        let hero = line[1];

        switch (command) {
            case 'CastSpell':
                let requiredMP = Number(line[2]);
                let spellName = line[3];

                if (heroesObj[hero].mp >= requiredMP) {
                    heroesObj[hero].mp -= requiredMP;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${heroesObj[hero].mp} MP!`);
                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }

                break;
            case 'TakeDamage':
                let damage = Number(line[2]);
                let attacker = line[3];
                heroesObj[hero].hp -= damage;
                if (heroesObj[hero].hp <= 0) {
                    console.log(`${hero} has been killed by ${attacker}!`);
                    delete heroesObj[hero];
                } else {
                    console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[hero].hp} HP left!`);
                }
                break;
            case 'Recharge':
                let recharge = Number(line[2]);
                let chargedIfOver = 200 - heroesObj[hero].mp;
                heroesObj[hero].mp += recharge;

                if (heroesObj[hero].mp > 200) {
                    heroesObj[hero].mp = 200;
                    console.log(`${hero} recharged for ${chargedIfOver} MP!`);
                } else {
                    console.log(`${hero} recharged for ${recharge} MP!`);
                }
                break;
            case 'Heal':
                let heal = Number(line[2]);
                let healedIfOver = 100 - heroesObj[hero].hp;
                heroesObj[hero].hp += heal;

                if (heroesObj[hero].hp > 100) {
                    heroesObj[hero].hp = 100;
                    console.log(`${hero} healed for ${healedIfOver} HP!`);
                } else {
                    console.log(`${hero} healed for ${heal} HP!`);
                }
                break;
        }
    }
    let heroesArr = Object.entries(heroesObj);
    if (heroesArr.length > 0) {
        heroesArr.sort((heroA, heroB) => {
            let heroAName = heroA[0];
            let heroBName = heroB[0];
            let heroAVitals = heroA[1];
            let heroBVitals = heroB[1];
    
            if (heroAVitals.hp !== heroBVitals.hp) {
                return heroBVitals.hp - heroAVitals.hp
            } else {
                return heroAName.localeCompare(heroBName)
            }
        });
    
        for (let el of heroesArr) {
            let heroName = el[0];
            let heroVitals = el[1];
            console.log(heroName);
            console.log(`  HP: ${heroVitals.hp}`);
            console.log(`  MP: ${heroVitals.mp}`);
        }
    }
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]  
)