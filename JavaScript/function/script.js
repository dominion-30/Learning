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