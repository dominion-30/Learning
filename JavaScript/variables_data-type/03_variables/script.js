// Ways to declare a variable
// var, let, const
/*
let firstName = "John";
let lastName = "Doe";

console.log( firstName, lastName);

let age = 30;

console.log(age);
*/
// Reassinging variables
/*
age = 31;

console.log(age);

let score;

score = 1;
if(true){
    score  = score + 1;
}

console.log(score);

const x = 100;
console.log(x);


const arr = [1,2,3,4];
arr.push(5);

console.log(arr);
*/

// for primitive types data is stored in stacks while for reference types they are stored in heap.

// This values are stored on the stack
const name = "John";
const age = 30;


let newName = name;
newName = "Dele";

console.log(name, newName);
// reference values are stored on the heap
const person = {
    name: "Ayobamidele",
    age : 26,
}

console.log(person);
const newPerson = {};
newPerson.name = "Dele";
console.log(person, newPerson);
