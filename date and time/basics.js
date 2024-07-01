let date = new Date()

console.log(date.toString());

console.log(date.toDateString());

console.log(date.toLocaleString());

console.log(typeof date);


let customDate = new Date(2024,3,20)
console.log(customDate.toLocaleString());

console.log();

let newDate = new Date("2024-04-20")
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

let xDate = new Date()
console.log(xDate);
console.log(xDate.getMonth()+1);
console.log(xDate.getDay());