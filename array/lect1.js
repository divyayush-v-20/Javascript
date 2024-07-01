
const myArr = new Array(9,3,6,1,2)

console.log(myArr);


myArr.unshift(7) //adds element to first position
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(1));


const newArr = myArr.join()
console.log();
// console.table([myArr,newArr,typeof myArr,typeof newArr]);


//slice, splice

console.log("A ",myArr);

const newArr1 = myArr.slice(1,4) //only prints the elements of the given range without changing original array
console.log("slice ",newArr1);

const newArr2 = myArr.splice(1,4) //splice removes the elements of the given range from the original array
console.log("splice ",newArr2);

console.log("original array ",myArr)