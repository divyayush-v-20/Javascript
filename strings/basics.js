const name = new String('divyayush-v-20')
const age = 20
console.log(`Hello my name is ${name} and my age is ${age} years`)

const game = new String('Valorant')
console.log(`${game}`)

// console.log(game.__proto__);

console.log(game.length);

console.log(game.toLowerCase());
console.log(game.toUpperCase()); //this does not change the original string

console.log(game.charAt(6))
console.log(game.indexOf('n'));

const tmp = name.substring(4);
console.log(`${tmp}`);

const example = new String('0123456789')
// const ex = example.substring(0,5)
const ex = example.slice(-4,8)
console.log(`${ex}`)


//trim method(removes spaces)
const stringName = "        Divyayush Verma     "
console.log(stringName);
console.log(stringName.trim());

//replace
const url = "https://divyayush.com/divyayush%20v20"
console.log(url.replace('%20','_'));

//includes(to check if string includes a substring)

console.log(url.includes('ayush'))

//convert string to array - split method
const stringEx = new String('1-2-3-4-5-6')
console.log(stringEx.split('-'));