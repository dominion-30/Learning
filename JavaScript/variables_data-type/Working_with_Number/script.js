let x,y;

const num = new Number(131);


// if you want to get the length of a number, you could change it to a string first, them act on it.
x = num.toString().length;
x = num.toFixed(2)
x = num.toPrecision(2);
x = num.toExponential(1)

x = num.toLocaleString("en-US");
y = typeof x
// console.log(x, y);
console.log(num);