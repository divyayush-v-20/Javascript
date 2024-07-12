// for each continued..

const coding = ["js","cpp","java","py","jsx"];
const values = coding.forEach((item) => {
    // console.log(item);
    return item;
});

// console.log(values);
//foreach loop doesn't return values

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numsAbove5 = nums.filter( (num) => num > 5);
// console.log(numsAbove5);

// const newNums = [];
nums.forEach((num)=>{
    if(num > 5){
        // newNums.push(num)
    }
});
// console.log(newNums); 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
userBooks = books.filter((bk) => {
    return bk.publish >= 2000 //return keyword is required when inside a scope
});
userBooks = books.filter((bk) => {
    return (bk.publish >= 1995 && bk.genre === 'History')
});

// console.log(userBooks);

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNumsx = myNums.map((num) => num+10);
// console.log(newNumsx);

// CHAINING

const newNums = myNums . map((it) => it*10) . map((it) => it/2) .filter((it) => it%2==0)

// console.log(newNums);

// REDUCE
const numsArray = [1,2,3,4]

// const sumArray = numsArray.reduce(function(acc,cur) {
//     console.log(`acc = ${acc} and cur = ${cur}`);
//     return acc + cur;
// }, 0);

let ini = 0;

const sumArray = numsArray.reduce( (acc, cur) => acc + cur, ini);

// console.log(sumArray);


const shoppingCart = [
    {
        productName : "fullstack course",
        price : 2999
    },
    {
        productName : "dsa course",
        price : 3599
    },
    {
        productName : "ml course",
        price : 4999
    },
    {
        productName : "js course",
        price : 999
    }
]

// return total price of products in cart

// const totalPrice = shoppingCart.reduce((acc, cur) => acc + cur.price ,0);
const totalPrice = shoppingCart.reduce((acc,cur) => {
    return acc + cur.price
}, 0)

console.log(totalPrice);