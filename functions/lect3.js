//hoisting
// console.log(func1(4));
function func1(n){
    return (n*n);
}

// console.log(func2(3)); //gives error as the function is stored in a variable, and cant be accessed before initialization
const func2 = function(n){ //also called expression(when functions are held in variables)
    return (n*n);
}
// console.log(func2(3));

//  Arrow Functions & 'this' Keyword

const student = {
    name : "abc",
    rollNo : 12,
    email : "abc@xyz.com",

    welcome: function(){
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
    }
}

// student.welcome()
// student.name = "divyayush"
// student.welcome()

// console.log(this);

// function fn(){
//     console.log(this);
// }
// fn()

const func = () => {
    console.log("arrow function executed");
}
// func()

//implicit return
const implicit = (a,b) => (a**b);

// console.log(implicit(4,3));

const objectRet = () => ({name : "divyayush"});

// console.log(objectRet());

