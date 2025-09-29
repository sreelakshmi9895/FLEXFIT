//  w a p to  check a function is odd or even

var prompt = require('prompt-sync')();
var input = prompt('Input  number: ');

// function numCheck(num){
//     return num%2==0 ? 'EVEN': 'ODD'
// }
// console.log(`The input: ${input} is ${numCheck(input)} NUMBER`);
 
//  w a p to  check a function is odd or even

var prompt = require('prompt-sync')();
var input = prompt('Input  number: ');

const numCheckn= num => num%2==0 ? 'EVEN': 'ODD'

console.log(`The input: ${input} is ${numCheck(input)} NUMBER`);

