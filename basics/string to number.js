//OPERATIONS
let val = 5
let negVal = -val
console.log(val);
console.log(negVal);

//power -> m to the power n is written as m**n

let str1 = "hello "
let str2 = "divyayush"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) // => 12

console.log("1" + 2 + 2) // => 122

console.log(1 + 2 + "2") // => 32

console.log("1" + (2 + 2)) // => 14

console.log(+true) // => 1

console.log(+"") // => 0

let num1,num2,num3
num1 = num2 = num3 = 4
console.table([num1,num2,num3])

// increment
let cnt = 100
console.log(++cnt) // => 101 is printed and cnt is incremented by 1, cnt = 101
console.log(cnt++) // => 101 is printed but cnt is incremented by 1, cnt = 102
console.log(++cnt) // => 103 is printed, bcz cnt was 102, and pre-increment is used which prints 103 and cnt incremented by 1, cnt = 103