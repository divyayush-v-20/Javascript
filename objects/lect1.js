// singleton - no multiple instances
// Object.create

//object literals

const mySymbol = Symbol("key1");

//interview ques : create a symbol and use it as a key in an object

const JsUser = {
    name: "Divyayush",
    age : 20,
    location : "Patiala",
    email : "divyayushv20@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Monday","Saturday"],

    //symbol used as a key
    // mySymbol : "mykey1" //but datatype is still string, so it is not the correct/proper method
    [mySymbol] : "mykey1" //using [] -> correct method
}

//access objects
console.log(JsUser.email);
console.log(JsUser["email"]); //bcz key is stored as a string
console.log(JsUser[mySymbol]);

//changing values
JsUser.email = "randomguy@gmail.com"
console.log(JsUser["email"]);

//to lock values of an object
// Object.freeze(JsUser)
JsUser.email = "divyayush@gmail.com"
console.log(JsUser["email"]); //email will not be changed as the object is freezed

// console.log(JsUser);

//adding functions in object
JsUser.greeting = function(){
    console.log("hello JsUser");
}

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());

console.log(JsUser.greeting2());

//mostly, values of object are accessed by '.' notation