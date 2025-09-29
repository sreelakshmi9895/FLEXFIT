// variable-using var keyword
console.log( typeof num);
var num=1000
console.log(typeof num);
num="1000"
console.log(typeof num);
// variable using const keyword
const data="const variable"
console.log(data);
// commas
console.log(typeof data, "date is", 1000);
// concantenation
console.log(typeof data+ " date is "+ 1000);
// template literals
console.log(`${typeof data} date is ${1000}`);

// let -variable
var i=10
console.log("Before loop, i= "+i);
for(let i=1;i<=5;i++){
    console.log("inside loop,i= "+i);
}
console.log("Outside loop,i= "+i);
