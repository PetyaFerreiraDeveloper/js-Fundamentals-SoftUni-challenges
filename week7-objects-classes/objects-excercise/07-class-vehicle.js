function vehicleClass() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = {
                engine: parts.engine,
                power: parts.power,
                quality: parts.engine * parts.power
            };
            this.drive = (amount) => {
                this.fuel = fuel - amount;
            }
        }
    }

    let parts = {
        engine: 6,
        power: 100
    }
    let trabant = new Vehicle('l', 'k', parts, 840);
    trabant.drive(20);
    console.log(trabant.fuel);
    console.log(trabant.parts.quality);
    
}

vehicleClass()