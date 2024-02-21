//  ways to declare a variable
// var, let, const


// let firstName = "John";
// let lastName = "Doe";

// console.log(firstName, lastName);

// var age = 30;

// console.log(age);

// Reassigning variables

// age = 25;
// console.log(age);

// // Declare a variable.

// let score;

// score = 1;

// console.log(score);

// if(true){
//     score = score + 1;
// }

// console.log(score);

// const num = 5;

// console.log(num);

// const arr = [1,2,3,4];
// console.log(arr);

// arr.push(5);
// console.log(arr);

// Declare multiple variables at the same time

// let a,b,c;

// a = 2;
// b = 3;
// c = 4;

// console.log(a,b,c);

// const d = 500; const f = 600; const g = 800;
// console.log(d,f,g);

const firstName = "Sara";

// Number
// const age = 30;
const temp = 98.999

// Boolean
const haskids = true;

// Null 
const aptNumber = null;

// undefined;
// let score;
// const score = undefined

// symbol
// const id = Symbol("id");

// BigInt
// const num = 123456789111213141516171819n;

// Reference types
// Array

// const number = [1,2,3,4,5,6]

// function sayHello(){
//     console.log("Hello");
// }

// const output = sayHello;



// console.log(output, typeof output);

// Theses values are stored on the stack
const name = "John";
const age = 30;

// Reference values are stored on the heap

const person = {
    name: "Brad",
    age: 40
}

let newName = name;

newName = "Johnathan";

console.log(name , newName);

let newPerson = person;
console.log(newPerson, person);

newPerson.name = "Ayo";

console.log(person, newPerson);



