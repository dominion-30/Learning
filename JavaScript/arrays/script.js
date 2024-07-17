// let x;
// Array literals
// const numbers = [12,45,33,29,39];

// Array constructor

// const fruit = new Array("apple", "orange", "pineapple", "pear", "mango");
// console.log(fruit);
// console.log(typeof fruit);
// console.log(numbers);
// x = numbers[0];
// console.log(x);


let x;
// Array literal
const numbers = [12,45,33,29,39, [1,2,3,4], 9];
const mixed = [12, "name", null, undefined, true]

// Array Constructor
const fruits = new Array('people', "orange", "mango","pear", "meat");


x = numbers[0];
x = numbers[0] + numbers[3]
x = `my favourite fruit is an ${fruits[1]}`
x = numbers.length;
x = fruits[0] = "grape";
x = fruits.length = 4;

x = fruits[4] = "Strawberry";
x = fruits[fruits.length] = "Mango";
console.log(x, fruits);