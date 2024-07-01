const marvel_heroes = ["thor","hulk","ironman"]
const dc_heroes = ["superman","batman","flash"]

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);
console.log(typeof all_heroes);

marvel_heroes.push(...dc_heroes); // ... splits the array into just elements, so only the elements of the array are added to marvel_heroes and not the array itself
console.log(marvel_heroes);

const another_array = [1,2,3, [4,5,6], 7, [6,7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.from("Divyayush"));
console.log(Array.from({name : "DIVYAYUSH"}));

const ele1 = 100
const ele2 = 200
const ele3 = 300
console.log(Array.of(ele1,ele2,ele3));