//functions

function sayMyName(){
    console.log("DIVYAYUSH");
}

// sayMyName();

function add(num1, num2){
    return (num1 + num2);
}
// console.log(add(3,4));

function checkPrime(num){
    if(num<=1){
        return false;
    }
    if(num===2){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(num) ; i++){
        if( num % i == 0 ){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(24));

function loginUserMessage(username = "user"){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in.`;
}

console.log(loginUserMessage());