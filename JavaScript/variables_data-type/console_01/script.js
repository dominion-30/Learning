console.log(100);
console.log(typeof(100));
console.log('hello world');
console.log(20, "Hello World", true);

const x = 100;
console.log(x);

console.error("Alert");
console.warn("Warning");
console.table({name: 'Ayo', email: 'abiola_ayobamidele@yahoo.com'});

console.group("Simple")
console.log(x);

console.error("Alert");
console.warn("Warning");
console.groupEnd()

const styles = 'padding: 10px; background-color: white; color:green;';

console.log("%cHello World", styles);
