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


// let x;
// Array literal
// const numbers = [12,45,33,29,39, [1,2,3,4], 9];
// const mixed = [12, "name", null, undefined, true]

// Array Constructor
// const fruits = new Array('people', "orange", "mango","pear", "meat");


// x = numbers[0];
// x = numbers[0] + numbers[3]
// x = `my favourite fruit is an ${fruits[1]}`
// x = numbers.length;
// x = fruits[0] = "grape";
// x = fruits.length = 4;

// x = fruits[4] = "Strawberry";
// x = fruits[fruits.length] = "Mango";
// console.log(x, fruits);

const arr = [34,55,95,20,15];
// arr.push(45); /*add an element to the end of the array*/
// let x = [8,9,10]
// arr.push([4,5,6], x);

// arr.pop();/*this removes the last element from the array*/


// arr.unshift(["people", 12, true]);
// arr.shift();
// arr.reverse();
// let y
// y = arr[7][0];
// console.log(arr, arr.length);
// console.log(y);

// methods for get values from the array

// array.includes

let x,y;
// y = arr.includes(20);
// console.log(arr);
// y = arr.indexOf(15);
y = `Array arr = ${arr}`;
console.log(y);
x = arr.includes(20);
x = arr.indexOf(15);

x = arr.slice(1,4 );
x = arr.splice(1,4);

console.log(x, arr);