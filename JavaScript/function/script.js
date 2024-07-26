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

const x = 100;

// console.log(x);

if(true){
    const y = 200;
    console.log(x + y);
}
// const y = 1

// console.log(x +y);

for( let i = 0; i<= 10; i++){
    console.log(i);
}

// console.log(i);

if(true){
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(c);
console.log("testing var");

for(var i = 0; i<=10; i++){

    console.log(i);

}
console.log(i);

function running(){
    var b = 1000;
    console.log(b);
}

running()
// console.log(b+ 1);

var testing = 4;
let test = 14;
const tests = 140;
console.log(window);