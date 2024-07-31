// function sayHello(){
//     console.log("Hello World");
// }

// sayHello();

// parameter are the variables in the parenthesis, while argument is/are the data type that is used when the function is to be called.
// function add(num1, num2){
//     console.log(num1 + num2);
// }

// add(50,50);

// function subtract(num1, num2){
//     let ans = num1 - num2;
//     // console.log(ans);
//     return ans;
   
// }

// const ans=  subtract(100,5);
// console.log(ans, subtract(100,100));

// working with arguments and parameters


// default params
// function registerUser(user){
//     if(!user){
//         return "Not found, check user and try again!"

//     }
//     else{
//         return user + " is registered";
//     }

    

// }

// const ans = registerUser("Ayobamidele");
// console.log(ans);

// continuation of default params



// function registerUser(user ="Bot"){
//     return user + " is registered";

// }

// const ans = registerUser();
// console.log(ans);

// Rest params
// this allow you to pass unlimited amount of parameters returned as an array

// function sum(...numbers){
//     let total  = 0;
//     for(const num of numbers){
//         total+=num;
//     }
//     return total;
// }

// const result = sum(1,2,3,4,10,30,100);
// console.log(result);

// Object as params
// const Users = [
//     {id:1,
//         userName:"dele",
//         status:true,
//     },
//     {id:2,
//         userName:"goodgril",
//         status:true,
//     },
//     {id:3,
//         userName:"lukas",
//         status:true,
//     }
// ]

// function loginUser(user){
//     return `The user ${user.userName} with the id of ${user.id} is logged in`;
// }

// const result = loginUser(Users[1]);
// console.log(result);

// let x = Users[0].userName;
// console.log(x);


// function that will get a random number from a specific array that we pass in

// function getRandom(arr){
//     const randomIndex = Math.floor(Math.random()*arr.length);

//    return arr[randomIndex];

// }

// arr = [1,2,3,4,5,6,7,8,9];

// const ans = getRandom(arr);
// console.log(ans);

// window.alert("Hello World");
// console.log((window));
// console.log(window.innerWidth);
// console.log(window.innerWidth);



// Global and function Scope
// const x = 100;
// console.log(x, "in global scope");

// function run (){
//     console.log(x, "inside the function");
//     return window.innerHeight;
// }

// let result = run();
// console.log(result);

// if(true){
//     console.log(x, "in block");
// }

// function add(){
//     const y = 50;
//     console.log(y+x);
// }

// add();

// console.log(y + x);


// Block Scope

// const x = 100;

// console.log(x);

// if(true){
//     const y = 200;
//     console.log(x + y);
// }
// const y = 1

// console.log(x +y);

// for( let i = 0; i<= 10; i++){
//     console.log(i);
// }

// console.log(i);

// if(true){
//     const a = 500;
//     let b = 600;
//     var c = 700;
// }

// console.log(c);
// console.log("testing var");

// for(var i = 0; i<=10; i++){

//     console.log(i);

// }
// console.log(i);

// function running(){
//     var b = 1000;
//     console.log(b);
// }

// running()
// console.log(b+ 1);

// var testing = 4;
// let test = 14;
// const tests = 140;
// console.log(window);

// function first(){
//     const x = 100;

//     function second(){
//         const y = 200;
//         console.log(x + y);

//     }
    
//     second();
//     console.log(y);
// }

// first();


// Funtion Declaration
// const result = addDollarSign(500);
// console.log(result);
// function addDollarSign(value){
//     return `$${value}`;
// };





// function expression

// const addPlusSign = function (value){
//     return "+" + value;
// }

// console.log(addPlusSign(100));

// ES6 or ES2015

// arrow function

/*function add(a,b){
    // console.log(a + b);
    // return a+b;
}*/

// const result = add(1,9);
// console.log(result);

// arrow function
// const addition =(a,b) =>{
//     return a + b;
// }

// implicit return
// const subtract = (a,b) => a - b;

// console.log(addition(3,10));

// console.log("subtraction", subtract(20,20));


// const r =() =>{
//  console.log("This is an arrow function");
// }
// r();

// arrow function

// function add(a,b){
//     return a +b;
// }

// const add = function(a,b){
//     return a +b;

// }
// console.log(add(1,2));


// arrow function

// const multiply = (c,d)=>{
//     return c * d

// }

// console.log(multiply(3,9));

// another way of writing this can be done using implicit return

// const multiplication =(a,b)=> a*b;

// console.log(multiplication(2,10), multiply(2,10));

// can leave off parenthesis with a single parameter

// const double = a => a * 2;
// console.log(double(500));


// returning an obj

// const createObj = ()=> ({
//     name:"Ayo",
//     Gender:"Male"
// });

// console.log(createObj());


// const number = [1,2,3,4,5,6];


// number.forEach(function(n){
//     console.log(n);
// })

/*
number.forEach(n=>{
    console.log(n);
})*/

// number.forEach(n=> console.log(n));



// in order to solve this, we create an IIFE(Imediately Invoked Function Expression)

// syntax of IIFE
(function(){
    const user = "John";
    console.log(user);

    const hello = ()=> console.log("hello from inside the IIFE");
    hello();

})();

(function(a){
    console.log(a * 2);

})(4);

// (function add(a,b){
//     return a + b;

// })(console.log(add(20,10)));



// const hello = ()=>{
//     console.log("hello from outside the IIFE");
// }
// hello();


// Challenge 

// Challenge 1
// this function take Fahrenheit and converts it to celcius;
// 180/100 + 32 celcius to fahrenheit
// 100/180 - 32
// function getCelsius(Fahrenheit){
//     return ((Fahrenheit - 32) * 100/180)

// }
// const result = getCelsius(61);
// console.log(result);
// console.log("cel-fah", 180/100 + 32);
// console.log("feh-cel", (100/180)-32);

const getCelsius = Fahrenheit=> console.log(`The temperature of ${Fahrenheit} F is ${(Fahrenheit - 32) * (100/180)} \xB0C`);

getCelsius(50);


// Challenge 2

// const minMax = (arr)=>{
    
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     // const result = [min,max];
//     const result = [];
//     result.push(max, min);
//     return result;

// }
// console.log("\xB0");

// Challenge 2 arrow function

const minMax = (arr) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min,
        max,
    }
}

console.log(minMax([1,2,300,4,5]));

// console.log(minMax([1,2,3,4,5,6,7,8,9]));


// const arr = [1,2,3,4,5,6];

// console.log(...arr);
// console.log(Math.max(arr.entries));

// Challenge 3

((L,W)=>{
  
    console.log(`The rectangle has a length ${L} cm and width ${W} cm. The area is ${L*W} cm^2`);

})(10,5);

