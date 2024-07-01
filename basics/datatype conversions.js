let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber)
console.log(typeof valueInNumber)
//type of NaN(not a number) is number
// Number(string) = NaN
// Number(boolean) = {1 if true, 0 if false}
// Number(undefined) = number
// Number(null) = number



//1->true
//0->false
//""->false
//"not empty"->true

let num = -1
let stringNum = String(num)
console.table([stringNum,typeof stringNum])