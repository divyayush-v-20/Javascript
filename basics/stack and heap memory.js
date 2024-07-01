//primitive datatypes -> stack memory
//non-primitive datatypes -> heap memory 

let user = {
    id : 2210990299,
    name : "Divyayush",
    batch : 2022
}

let user1 = user
console.log(user1)

let user2 = user
user2.id = 2210990001
console.log(user)
//reference is used therefore changes are directly made to the original object