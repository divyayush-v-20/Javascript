function calculateCartPrice(...num1){
    let ans = 0;
    for(let i = 0 ; i < num1.length ; i++){
        ans += num1[i];
    }
    return ans;
}
console.log(calculateCartPrice(200,400,500,600));

const user = {
    username : "divyayush",
    age : 20
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// handleObject(user);
handleObject({
    username : "ayush",
    age : "19"
})

const myArr = [200,400,100,600]

function returnSecondValue(arr){
    return arr[1];
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([1,2,3,4]));