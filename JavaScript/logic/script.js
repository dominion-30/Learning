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

// const d = new Date(2022, 1, 10, 8, 0, 0);
const d = new Date('2022-04-10T08:00:00');

const Getmonth = d.getMonth();

let month = Getmonth + 1;

switch(month){
    case 1:
        console.log("It is January");
        break;
    
    case 2:
        console.log("It is February");
        break;

    case 3:
        console.log("It is March");
        break;

    default:
        console.log("It is neither January, February or March");
}