// for of

const arr = [3,7,1,5,4]
for(const i of arr){
    // console.log(i);
}

const twoDimArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

for(const row of twoDimArr){
    for(const ele of row){
        // console.log(ele);
    }
}

// Maps -> holds key:value pairs
const map = new Map()
map.set('IN',"India");
map.set('Fr',"France");
map.set('Eu',"Europe");
map.set('USA',"United States of America");

// console.log(map);

for(const [key,value] of map){
    // console.log(key,'->',value);
}

const games = {
    'game1' : 'Valorant',
    'game2' : 'Counter Strike',
    'game3' : 'Call of Duty',
    'game4' : 'Rainbow Six Seige'
}

// for(const [key,value] of games){
    // console.log(key,'->',value);
// } //object is not iterable


const lang = {
    js : 'javascript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby',
    swift : 'swift by apple'
}
// for(const key in lang){
//     console.log(`${key} -> ${lang[key]}`);
// }

// console.log(arr);

for(const key in arr){
    // console.log(`${key} -> ${arr[key]}`); //keys of array are its indices
}

for(const key in map){
    // console.log(key); //map isn't iterable using this method
}



// for each loop
const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function(element){
//     console.log(element);
// });

// coding.forEach(element => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// });

const myCoding = [
    {
        langName : "javascript",
        langExt : "js"
    },
    {
        langName : "c++",
        langExt : "cpp"
    },
    {
        langName : "reactjs",
        langExt : "jsx"
    },
    {
        langName : "python",
        langExt : "py"
    }
]

myCoding.forEach((ele)=>{
    console.log(ele.langName,ele.langExt);
});