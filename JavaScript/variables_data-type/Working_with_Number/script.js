// let x,y;

// const num = new Number(131);


// if you want to get the length of a number, you could change it to a string first, them act on it.
// x = num.toString().length;
// x = num.toFixed(2)
// x = num.toPrecision(2);
// x = num.toExponential(1)

// x = num.toLocaleString("en-US");
// y = typeof x
// console.log(x, y);
// console.log(Math);

// math object
// let x;
// x = Math.sqrt(9);

// x = Math.abs(-2);
// x = Math.round(4.8);

// note: the ceil method always rounds up 

// x = Math.ceil(4.9);

// note: the floor method always rounds down
// x =Math.floor(4.9);

// x=Math.pow(2,4);

// x = Math.min(5,6, 2, 0, -1);
// x = Math.max(5,6, 2, 0, -1);

// generating  random numbers between 0 and 1
// x = Math.random();

// generate random nunbers between 0 and 9
// x = Math.random() * 10;

// generate random nunbers between 0 and 10
// x = Math.random() * 11;

// generate random whole nunbers between 0 and 10
// x = Math.floor( Math.random() * 11);
// console.log(x);

let x,y;

x = Math.floor(Math.random()*100 + 1 );
y = Math.floor(Math.random()*50 + 1 )
console.log(x,y);
let summation, diff, product, quot, remainder;

summation = `The sum of ${x} and ${y} is ${x + y}`;
diff = `The difference between ${x} and ${y} is ${x - y}`;
product = `The product of ${x} and ${y} is ${x * y}`;
quot = `The quotient of ${x} by ${y} is ${x/y}`;
remainder = `The remainder when ${x} is divided by ${y} is ${x % y}`;

console.log(summation);
console.log(diff);
console.log(product);
console.log(quot);
console.log(remainder);



