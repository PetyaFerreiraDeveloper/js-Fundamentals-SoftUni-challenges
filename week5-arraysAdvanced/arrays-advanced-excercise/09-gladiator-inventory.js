function gladiator(input) {
    let inventory = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let commandRow = input[i].split(' ');
        let command = commandRow[0];
        let equipment = commandRow[1]

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
               
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);
                    let repaired = inventory.splice(index, 1);
                    inventory.push(repaired);
                }
                break;
            case 'Upgrade':
                let equipmentUpgrade = equipment.split('-');
                let equip = equipmentUpgrade[0]
                if (inventory.includes(equip)) {
                    let index = inventory.indexOf(equip) + 1;
                    let newEl = equipmentUpgrade.join(':')
                    inventory.splice(index, equip, newEl);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiator(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)