const num = new Number(100)
console.log(num);
console.log(num.valueOf());

const otherNum = 27.73962
console.log(typeof otherNum.toString());

console.log();

console.log(otherNum.toFixed(2));

console.log(otherNum.toPrecision(4));

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')); //commas acc to Indian Standards

console.log();

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);