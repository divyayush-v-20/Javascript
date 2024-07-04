const instagramUser = {}
instagramUser.name = "Divyayush"
instagramUser.id = "divyayush.v20"
instagramUser.isLoggedIn = false

// console.log(instagramUser);

const regularUser = {
    email : "abc@xyz.com",
    name : {
        first : "divyayush",
        last : "verma"
    }
}

// console.log(regularUser.name.first);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

//merge 2 objects
// const obj3 = {obj1, obj2} //problem -> object in object, we have to merge objects

// const obj3 = Object.assign({}, obj1, obj2) //{} is an optional parameter, but is a good practice
//{} -> target, and other parameters -> source

const obj3 = {...obj1,...obj2}; //spread operator same as arrays
// console.log(obj3);

//mostly objects from database come like this format 
const users = [
    {
        id : 1,
        email : "user1@gmail.com"
    },
    {
        id : 2,
        email : "user2@gmail.com"
    },
    {
        id : 3,
        email : "user3@gmail.com"
    }
]

console.log(Object.keys(instagramUser)); //return type is array
console.log(Object.values(instagramUser));
console.log(Object.entries(instagramUser)); //2d array [[key(1),value(1)],[key(2),value(2)],....,[key(n),value(n)]]
console.log(instagramUser.hasOwnProperty('isLogged')); //boolean return type,checks if object has a property