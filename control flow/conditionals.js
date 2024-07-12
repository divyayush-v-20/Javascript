const condition = true;

if(!condition){
    // console.log("user is logged in");
}
else{
    // console.log("user is logged out");
}

/*
if(condition){
    //code
}
    if condition==true, only then the block of code is executed
*/

//strict checking

const str = "124"
const num = 124

if(str == num){
    // console.log("value is same");
}
if(str === num){
    // console.log("datatype is also same");
}

const num1 = 10
const num2 = "50"

if(num1 != num2){
    // console.log("values are unequal");
}

// const bal = 501

// if(bal > 500) console.log("greater than 500"),
// console.log("random");

const balance = 1000

if(balance == 0) { 
    // console.log("account is empty");
}
else if(balance < 500) {
    // console.log("less than 500");
}
else if(balance < 1000) {
    // console.log("less than 1000");
}
else{
    // console.log("above 1000");
}



//real life usage

const userLoggedIn = false;
const debitCard = true;
const userAge = 20;

if(userAge >= 18 && userLoggedIn && debitCard) { 
    console.log("Allowed to purchase");
}

//falsy values => false, 0, -0, 0n(in BigInt), "", null, undefined, NaN

//truthy values => "0", 'false', " ", [], {}, function(){} + {anything which is not falsy}


//Nullish Coalescing Operator (??): null/undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ??  10;

// console.log(val1);

// terniary operators

const score = 44;

(score < 50) ? console.log("50 not completed") : console.log("50 completed");