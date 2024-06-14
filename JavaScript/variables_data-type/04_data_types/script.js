// string

const firstName = "Sara";

// Number
// const age = 30;

const temp = 98.9;

// Boolean

const hasKids = true;

// Null

const aptNumber = null;

// undefined
let score = undefined;

// symbol
const id = Symbol(5);

// Bigint

const n = 9007199254740991n;


//Reference types
const numbers = [ 1,2,3,4] 

// const person = {
//     name: "Ayo",
// }

function sayHello() {
    console.log("Hello");
}
const output = sayHello;

console.log(output, typeof output);

// these values are stored on the stack
const name = "John";
const age = 30;

// Reference values
// these values are stored on the heap

const person = {
    name:"Brad",
    age:40,
}


let newName = name;
newName = "Johnathan";
let newPerson = person;

newPerson.name = "Bradley";

// newPerson = {
//     name:"Ayo",
//     age:26
// }
console.log(name, newName);
console.log(person, newPerson);