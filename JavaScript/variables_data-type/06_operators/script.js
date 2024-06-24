// Arithemetic Operators
let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation

x = "Hello" +" "+ "World"

// Exponent operator
x = 2**3

// Increment
x = 1;
// x = x + 1;
x++;

// decrement
// x = x - 1;
// x--;

// Assignment operators
x = 10;

x+=5;
x-=5;
x*=5;
x/=5;
x%=5;

// comparison operators
x = 2 == 2;
x = 2 == 4;

x = 2 === "2"

x = 2!=="2";

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);


// Type coercion

x = 5+ '5';

// x = 5+ parseInt('5');
x = 5+ +'5';

x = 5  * "5";

x = 5 + null;

x = Number(null);

x = Number(true);

x = Number(false);

x =  5 + true;
x = 5 + false;
x = 5 + undefined

console.log(x, typeof x);