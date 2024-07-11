let d;

// d = new Date();
// d = new Date(1998, 2, 25,12,30);

// d = new Date("1998-03-25T12:30:00");
// d = new Date("03/25/1998");

// d = new Date("2022-07-10");
// d = new Date("07-10-2022");

// this is the unit time stamp in determining the number of seconds that have passed since the date of January 1, 1970

// d = Date.now();

// d = new Date("1998-03-25");
// d = d.getTime();
// d = d.valueOf();
// d = new Date();
// d = d.getTime();
// d = new Date(1720730996556);
// d = Date.now();
// d = new Date();


// console.log(d);
d = new Date();
let x;
x = d.getTime();
x = d.valueOf()
x = d.getHours()
x = d.getMinutes();
x = d.getMonth();
x = d.getFullYear();
x = d.getDay();
x = d.getDate();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
x = Intl.DateTimeFormat("en-SVK").format(d);
console.log(x, d);

