//  w a p to print cube of a number using function

var prompt = require('prompt-sync')();
var input = prompt('Input number: ');

// function cube(num){
//     return num**3
// }
// console.log(`The cube of ${input} is ${cube(input)}`);


const cube=(num)=>num**3
console.log(`The cube of ${input} is ${cube(input)}`);
