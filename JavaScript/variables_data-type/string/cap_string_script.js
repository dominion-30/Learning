// Capitalize the first letter of myString using as many methods as possible
const myString = "developer";
// solution 1
// let myNewString = myString.replace("d",myString[0].toLocaleUpperCase());


// solution 2
// let myNewString = myString[0].toUpperCase() + "eveloper";

// solution 3

// let myNewString =  myString[0].toLocaleUpperCase() + myString.substring(1);

// solution 4
    
    let myNewString = `${myString.charAt(0).toLocaleUpperCase()}${myString.substring(1)}`;
console.log(myNewString);