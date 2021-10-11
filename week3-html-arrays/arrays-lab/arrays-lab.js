let nums = [10, 20, 30]
nums[3] = 50;
// console.log(nums)
console.log(nums.length)

// Arrays methods

// Method 1: arr.push() - appends new element to the end of the array
// nums.push(60);
// console.log(nums)
// console.log(nums.length)

// Method 2: arr.includes() - check if an element is in an array
// let check = nums.includes(50);
// console.log(check);

// Method 3: arr.toString() - turns an array into string
let arrString = nums.toString();
console.log(arrString);

// Method 4: arr.join() - returns a string from an array, where the elements are connected by a connecter
let newString = nums.join('-');
console.log(newString)

// Method 5: str.split(' ') - returns an array from a string, by dividing the string elements based on the divider in the quotes. in this example - it is by space
let str = 'Hello dear friends';
let strArr = str.split(' ');
console.log(strArr)

// For of method
let numbers = [1, 2, 3, 4, 5];
let output = '';
for (let number of numbers) {
    output += `${number} `;
}
console.log(output)
