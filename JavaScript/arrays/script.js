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

// let x;

// const person = {
//     name: "John Doe",
//     age: 30,
//     isAdmin:true,
//     address:{
//         street: "123 Main st",
//         city:"Boston",
//         state:"MA",
//     },
//     hobbies:["sports","cycling","programming","cooking", "driving"],

// };
// x = person.name;
// x = person["name"];
// x = person.address.state;
// x=  person["address"]["state"]
// x = person.hobbies[0];

// update name property
// person.name = "Jane Doe";
// x = person;
// person.isAdmin = false;
// x = person;

// delete/remove a property from the object literal
// delete person['age'];

// adding a function to an object literal

// person.greet = function(){
//     console.log(`Hello, my name is ${this.name}`);
// }

// x = person.greet();
// x= person;
// let x;

// method 1

// const todo = {};
// todo.id = 1;
// x = todo;

// method 2
// const todo = new Object();

// todo.id = 1;
// todo.name = "Buy Milk";
// todo.completed = false;

// x = todo;

// const person = {
//     address:{
//         coordinates:{
//             lat: 42.9384,
//             lng: -71.3232,
//         }

//     }
// }
// x = person.address.coordinates.lng;

// const obj1 = {a:1, b:2};
// const obj2 = {c:3, d:4};

// const obj3 = {...obj1, ...obj2 };

// const 

// x = obj3;
// console.log(x);
let x;
const todo = {};
todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;
x = todo;

const person = {
    coordinates:{
        lat:42.9384,
        lng:-71.3232,
    }
};
x = person["coordinates"]["lat"];
x = person.coordinates.lng;

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {...obj1, ...obj2};
const obj5 = {numbers:[5,3,6,9,7], two:2};

x = obj3;

const obj4 = Object.assign({}, obj3, obj5,  obj1);
x = obj4;

const todos = [{
    id:1, name:"Buy Milk"},
    {id:2, name:"Pickup kids from school"},
    {id:3, name:"Take out trash"}];

    x = todos;
    x = todos[0].name;

    // other methods available on object

    //  if you want to get all the keys
    x = Object.keys(todo)

    // getting the length of an object cannot be done using the  length on the object, we first get the keys, then apply length on the returned array.

    x = Object.keys(todo).length;
    x = Object.values(todo).length;
    x = Object.entries(todo);
    x = todo.hasOwnProperty("age");
console.log(x, typeof x);

// method 2
// const todo1 = new Object();
// x = todo1;
// console.log(x, typeof x);