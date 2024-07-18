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

// const arr = [34,55,95,20,15];
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

// let x,y,z;
// y = arr.includes(20);
// console.log(arr);
// y = arr.indexOf(15);
// y = `Array arr = ${arr}`;
// console.log(y);
// x = arr.includes(20);
// x = arr.indexOf(15);

// x = arr.slice(1,4 );
// x = arr.splice(1,4);
// x = arr.splice(3,1);
// z = arr.splice(1,4).reverse().toString().length
// x = arr.splice(1,4).reverse().toString().charAt(2);


// console.log(x, arr);\\\

// let x;
// const fruits = ["apple","pear", "orange"];

// const berries = ["strawberry", "blueberry", "rasberry"];

// x = fruits.push(berries);
// x = fruits[fruits.length-1][1];

// const allFruits = [fruits, berries];
// x = allFruits;
// x = allFruits[1][0];

// x = fruits.concat(berries)

// Spread operator (...)

// x = [...  fruits, ... berries];

// Flatten array


// const arr= [1,2,[3,4],5,[6,7], 8];
// x = arr.flat();

// Static methods on array Objects

// x = Array.isArray();

// x = Array.from("12345678");

// const a = 1;
// const b = 2;
// const c = 3;
// x = Array.of(a,b,c)
// console.log( x);

// Challenge

// Challenge 1
// const arr = [1,2,3,4,5];
// arr.push(6);
// arr.unshift(0);
// arr.reverse();
// console.log(arr);

// Challenge 2

// solution 1
// const arr1  = [1,2,3,4,5];
// const arr2 = [5,6,7,8,9,10];
// let x ;
// x = arr2.splice(0,1);
// const arr3 = arr1.concat(arr2);
// console.log(x, arr2, arr3);

// solution 2

// let y;

// y = arr1.slice(0,arr1.length-1);
// const arr3 = [...y, ...arr2];
// console.log( arr3);


// Object Literal
// to access properties from the  object literal, we could use the dot notation. i.e person.name put in a variable or the bracket notation, i.e person["age"]

let x;

const person = {
    name: "John Doe",
    age: 30,
    isAdmin:true,
    address:{
        street: "123 Main st",
        city:"Boston",
        state:"MA",
    },

};
x = person.name;
x = person["name"];
x = person.address.street;

console.log(x);