let x;
const name ="Ayobamidele";
const age = 26;

x = "My name is " + name +","+ " I am " + age + " years old";
console.log(x);

// Template literals
// let y = `My name is ${name}, I am ${age} years old.`;
// console.log(y);

// String properties and methods
const s =("Hello World");
// console.log(typeof s);
x = s.length;
x = s[10];
x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

// to get the character at a particular index
x = s.charAt(10);

x=s.indexOf("W");

x = s.substring(6, 10);
x= s.substring(7);
x = s.substring(0,5);
let y;
// y = s.slice(0,5);
// with slice we can use negative numbers
x = s.slice(0);
y = s.slice(-(s.length), -2);
y = "              Hello World";
// x = s.length;
// y = y.length;
y = y.trim();
x = s.length;
y=y.length;

x=s.replace("World", name );
x = s.includes("Hello");

// valueOf gives the true primitive of an object
x =s.valueOf() 
x =s.split("");
console.log(x);


// Challenge
const myString = 'developer';
let myNewString;

// 1
// myNewString = myString.charAt(0).toUpperCase();
// myNewString = `${myNewString}${myString.substring(1)}`;
// 2
// myNewString = myString[0].toUpperCase();
// myNewString = `${myNewString}${myString.substring(1)}`;
// 3
// myNewString = myString.substring(0,1).toUpperCase();
// myNewString = `${myNewString}${myString.substring(1)}`;
// 4
// myNewString = myString.split("");
// myNewString=myNewString[0].toUpperCase();
// myNewString = `${myNewString}${myString.substring(1)}`;
// 5
// myNewString = myString.replace("d", "D");
// myNewString = myNewString[0];
// myNewString = `${myNewString}${myString.substring(1)}`;
// 6
myNewString = myString.slice(-(myString.length),(-(myString.length) + 1)).toUpperCase();
myNewString = `${myNewString}${myString.substring(1)}`;




console.log(myNewString);