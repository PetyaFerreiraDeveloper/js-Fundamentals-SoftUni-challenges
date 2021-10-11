function pass(password) {
    let bool = true;
    let passL = password.length;
    let letterSmall = 'abcdefghijklmnopqrstuvwxyz'
    let letterLarge = letterSmall.toUpperCase();
    let dig = '1234567890';
    let letterDigit = letterSmall + letterLarge + dig;
    
    if (!(passL >= 6 && passL <= 10)) {
        bool = false;
        console.log('Password must be between 6 and 10 characters')
    }
    alphanumeric();
    twoDigits();

    function alphanumeric() {
        for (let i = 0; i < passL; i++) {
            if (!letterDigit.includes(password[i])) {
                bool = false;
                break;
            } else {
                bool = true;
            }
        }
        if (!bool) {
            console.log('Password must consist only of letters and digits')
        }
    }

    function twoDigits() {
        let countDigits = 0;
        for (let i = 0; i < passL; i++) {
            if (dig.includes(password[i])) {
                countDigits++;
            }
        }
        if (countDigits < 2) {
            bool = false;
            console.log('Password must have at least 2 digits')
        }
    }

    if (bool) {
        console.log('Password is valid')
    }

}

pass('Pa$s$s')