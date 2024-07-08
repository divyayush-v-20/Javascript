//immediately invoked function expressions (IIFE)

(function iife(){   //named IIFE
    console.log("executed");
})(); //semicolon needs to be added

((expression) => {  //unnamed IIFE
    console.log(`arrow IIFE with expression = ${expression}`);
})('yellow');