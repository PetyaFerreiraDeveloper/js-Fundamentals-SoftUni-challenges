function sort(num1, num2, num3) {
    if (num1 >= num2) {
        if (num1 >= num3) {
            if (num2 >= num3) {
                console.log(num1);
                console.log(num2);
                console.log(num3);
            } else {
                console.log(num1);
                console.log(num3);
                console.log(num2);
            }
        } else {
            console.log(num3)
            console.log(num1)
            console.log(num2)
        }
    } else if (num1 < num2) {
        if (num2 <= num3) {
            console.log(num3)
            console.log(num2)
            console.log(num1)
        } else if (num2 > num3) {
            if (num1 > num3) {
                console.log(num2)
                console.log(num1)
                console.log(num3)
            } else {
                console.log(num2)
                console.log(num3)
                console.log(num1)
            }
        }
    }

}

sort(0,0,2)