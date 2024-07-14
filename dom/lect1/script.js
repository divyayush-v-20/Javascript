const title = document.getElementById('title')
title.style.backgroundColor = 'green';
title.style.borderRadius = '10px';
title.style.padding = '10px';

console.log(title.innerHTML);

/*
const myul = document.querySelector('ul')
undefined
const turnGreen = myul.querySelector('li')
undefined
turnGreen.style.backgroundColor = 'green'
"green"
document.querySelectorAll('li')
NodeList(3) [ li, li, li
 ]

const tempList = document.querySelectorAll('li');
undefined
tempList
NodeList(3) [ li, li, li
 ]

tempList.forEach((num)=>{
  log
})

tempList.forEach((num)=>{
  console.log(num)
})
<li style="background-color: green;…nline-bgcolor: #006600;" data-darkreader-inline-bgcolor="">
debugger eval code:2:11
<li>
debugger eval code:2:11
<li>
debugger eval code:2:11
undefined
const colors = ['red','green','blue']
undefined
for(let i = 0; i< 3; i++){
  tempList[i].style.backgroundColor = colors[i];
}
"blue"
// blue->1, green->2, red->3
undefined
tempList.forEach((l) => {
  l.style.padding = '10px'
})
undefined
tempList.forEach((l) => {
  l.style.padding = '10px'
})
undefined
tempList.forEach((l) => {
  l.style.padding = '10px';
})
undefined
tempList.forEach((l) => {
  l.style.padding = '10px'; l.style.borderRadius = "10px"
}) 
*/