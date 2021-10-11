function vacation(num, type, day) {
    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                if (num >= 30) {
                    console.log(`Total price: ${(0.85 * num * 8.45).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 8.45).toFixed(2)}`)
                };
                break;
            case 'Saturday':
                if (num >= 30) {
                    console.log(`Total price: ${(0.85 * num * 9.80).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 9.80).toFixed(2)}`)
                };
                break;
            case 'Sunday':
                if (num >= 30) {
                    console.log(`Total price: ${(0.85 * num * 10.46).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 10.46).toFixed(2)}`)
                };
                break;
        }
    } else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                if (num >= 100) {
                    console.log(`Total price: ${((num - 10) * 10.9).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 10.9).toFixed(2)}`)
                };
                break;
            case 'Saturday':
                if (num >= 100) {
                    console.log(`Total price: ${((num - 10) * 15.6).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 15.6).toFixed(2)}`)
                };
                break;
            case 'Sunday':
                if (num >= 100) {
                    console.log(`Total price: ${((num - 10) * 16).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 16).toFixed(2)}`)
                };
                break;
        }
    } else if (type === 'Regular') {
        switch (day) {
            case 'Friday':
                if (num >= 10 && num <= 20) {
                    console.log(`Total price: ${(0.95 * num * 15).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 15).toFixed(2)}`)
                };
                break;
            case 'Saturday':
                if (num >= 10 && num <= 20) {
                    console.log(`Total price: ${(0.95 * num * 20).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 20).toFixed(2)}`)
                };
                break;
            case 'Sunday':
                if (num >= 10 && num <= 20) {
                    console.log(`Total price: ${(0.95 * num * 22.5).toFixed(2)}`)
                } else {
                    console.log(`Total price: ${(num * 22.5).toFixed(2)}`)
                };
                break;
        }
    }
};

vacation(40,
    "Regular",
    "Saturday"
)