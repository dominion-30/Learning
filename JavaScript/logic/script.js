// if(true){
//     console.log("This is true");
// }

// if(false){
//     console.log("This is Not true");
// }

// const x = 10;
// const y = 5;

// if(x >=  y){
//     console.log(`${x} is greater than or equal to ${y}`);

// }

// if(x ===  y){
//     console.log(`${x} = ${y}`);

// }
// else{
//     console.log(`${x} is not equal to ${y}`);
// }

// if(x!==y){
//     const z = 20;
//     console.log(`${z} is 20`);
// }

// console.log(z);

// let d;
// d = new Date();
// d = d.toString();

// d = new Date(2021, 6, 10, 22,5,0);
// console.log( d);

// const d = new Date(10,30,2022,17,0,0);
// const hour = d.getHours();
// console.log(hour);

// if(hour < 12){
//     console.log("Good Morning");
// }
// else if (hour<=18){
//     console.log("Good Afternoon");

// }
// else{
//     console.log("Good Night");
// }

// Nested if

// if(hour < 12){
//     console.log("Good Morning");
    
//     if(hour === 6){
//         console.log("Wake Up");
//     }
// }
// else if (hour<=18){
//     console.log("Good Afternoon");

// }
// else{
//     console.log("Good Night");

//     if(hour >= 20){
//         console.log("Bed Time");
//     }
// }

// if(hour >= 7 && hour < 12)  {
   

//     console.log("It is work time");
    
// }

// else if (hour >=12 && hour < 13 || hour >=15 && hour <16){
//     console.log("Break Time");
// }

// else{
//     if (hour >= 13 && hour < 15){
//         console.log("It is work time");
//     }
//     else if( hour >=16 && hour < 17){
//         console.log("it is work time");
//     }
//     else{
//         console.log("Office is closed");
//     }
// }

// const d = new Date(2022, 1, 10, 10, 0, 0);
// const d = new Date('2022-02-10T10:00:00');

// const Getmonth = d.getMonth();

// let month = Getmonth + 1;

// switch(month){
//     case 1:
//         console.log("It is January");
//         break;
    
//     case 2:
//         console.log("It is February");
//         break;

//     case 3:
//         console.log("It is March");
//         break;

//     default:
//         console.log("It is neither January, February or March");
// }
// const hour = d.getHours();
// switch (true){

//     case hour < 12:
//         console.log("Good morning");
//         break;
//     case hour < 18:
//         console.log("Good afternoon");
//         break;
//     default:
//         console.log("Good night");

// }

// console.log(hour);

// const email = "test@test.com";
// const name = "";

// if(email){
//     console.log("you passed in an email");
// }

// console.log(email, Boolean(email), Boolean(name));

// Falsy Values

// - false
//  - 0
//  - "" or '' (Empty string)
//  - null
//  - undefined
//  - NaN


// const x = " ";

// if(x){
//     console.log("This is a truty value");
// }
// else{
//     console.log("This is a falsy value");
// }
// console.log(Boolean(x));

// const email = "test@test.com";
// const x = "";

// if(email){
//     console.log("You passed in an email");
// }


// console.log(Boolean(email), Boolean(x));
// const x = {name:"Ayo",
//     age:26,
//     gender:"Male",

// };
// const x = function (){

// }
// if (x){
//     console.log("This is truthey");
// }
// else{
//     console.log("This is falsey");
// }
// console.log(Boolean(x));

// Truthy values:
// Everything else that is not falsy
// true
// "0" (0 in a string)
//  " " (space in a string)
// "false" (false in a string)
//  empty object:
// [] (empty array)
// {} (empty object)
// function (){} (empty function)

// let y = typeof(x);
// console.log(y);

// Truty and falsy caveats

// const children = "";

// if(children){
//     console.log(`You have ${children} children`);
// }
// else{
//     console.log("Please enter number of children");
// }

// checking for empty array

// const posts = [1];

// if (posts.length > 0){
//     console.log("list posts");
// }
// else{
//     console.log("No post to list");
// }

// console.log(posts.length);

// checking for empty objects

// const user = {
//     // name: "Ayo",
// }

// if(Object.keys(user).length > 0){
//     console.log("list user");
// }
// else{
//     console.log("No user to list");
// }


// console.log(Object.keys(user));


// loose equality
// console.log(false == 0);
// console.log("" == 0);
// console.log(null == undefined);

// Logical Operators

// console.log(40 > 20 && 30 > 15 && 10 < 20);
// console.log(10 > 20 || 30 > 15);


//  && - will return first falsy value or the last value

// let a;
// a = 10 && 20;
// a = 10 && 20 && 30;
// a = 10 && 0 && 30;
// a = 10 && "" && 0 && 30;
// console.log(a);

// const posts = [];
// console.log("start");
// console.log(posts.lenght > 0 && console.log(posts[0]));
// console.log("again");
// posts.length > 0 && console.log(posts[0]);
// console.log(posts.length);
// posts.lenght > 0 && console.log(posts[0]);

//  || - Will return the first truthy value or the last value

// let b;

// b = 10 || 20;
// b = 0 || 20;
// b = 0 || null|| ""|| undefined;
// console.log(b);

const email = "test@test.com";

if(email){
    console.log("You passed in an email");
}

// Falsy values:
//  - false
//  - 0
//  - "" or '' (Empty string)
// null
// undefined
// NaN

// Truthy Values:
// Everything else that is not falsy
// true
// "0" (0 in a string)
// " " (space in a string)
// "false" (false in a string)
// [] - (empty array)
//  - {} (empty object)
//  - function (){} (empty function)

const x = function (){};

if (x){
    console.log("This is truthy");
}
else{
    console.log("This is falsy");
}

console.log(Boolean(x));

// Truthy and falsy caveats

const children = 0;

if(!isNaN(children)){
    console.log(`You have ${children} children`);
}
else{
    console.log("Please enter number of children");
}


// Checking for empty arrays

const posts = [11,2];
// console.log(posts.length);
if(posts.length> 0){
    console.log("list post");
}
else{
    console.log("No post to show");
}

// checking for empty objects

const user = {
    name: "Brad",
};
// console.log(Object.keys(user)> 0);
if (Object.keys(user)> 0){
    console.log("List users");
}
else{
    console.log("No user to list");
}

console.log(10 < 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15);

// && - Will return the first falsy value or the last value

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && "" && 0 && 30;
console.log(a);

const post = ["post one", "post two"];
post.length> 0 && console.log(post[0]);