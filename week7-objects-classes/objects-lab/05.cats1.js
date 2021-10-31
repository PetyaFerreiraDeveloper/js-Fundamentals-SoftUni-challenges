function cat(arr) {
    class cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }
    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        let currentCat = arr[i].split(' ');
        let catName = currentCat[0];
        let catAge = currentCat[1];
        //console.log(currentCat);
        let createdCat = new cat(catName, catAge);
        createdCat.meow();
    }
}

cat(['Candy 1', 'Poppy 3', 'Nyx 2'])