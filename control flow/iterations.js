// for loop

for(let i = 1; i<=10 ; i++){
    // console.log(i);
}

//check if a number is prime
const isPrime = (num) => { 
    if(num <= 1) return false;
    if(num == 2) return true;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(!(num % i)){
            return false;
        }
    }
    
    return true;
}

// console.log(isPrime(24));

//pattern using nested loops
let num = 1
for(let i = 1; i<=5 ; i++){
    let res = ""
    for(let j = 1; j<=i ; j++){
        res += ((num++) + " ");
    }
    // console.log(res);
}



// while loop
while (true) {
    break;
}

//check if number is power of 2 using while loop
const isPowerOfTwo = (num) => {
    if(num < 0){
        return false;
    }
    while(num > 2){
        if(num % 2){
            return false;
        }
        num /= 2;
    }
    return (num == 2);
}
const isPowerOfTwoInConstantTime = (num) => {
    const pow = Math.log2(num);
    return (pow == Math.round(pow));
}
// console.log(isPowerOfTwo(15));
console.log(isPowerOfTwoInConstantTime(36));