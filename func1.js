//  w a p to create a function to add 2 numbers
// function add(num1,num2){
//     const result=num1+num2
//     console.log(`${num1}+${num2}=${result}`);
//     return result
// }

const add = (num1,num2)=>{
    const result = num1+num2
    console.log(`${num1}+${num2}=${result}`);
    return result
}

var prompt = require('prompt-sync')();
var input1 = prompt('Input first number: ');
var input2 = prompt('Input second number: ');
// add(+input1,+input2)
console.log(`Result = ${add(+input1,+input2)}`);
