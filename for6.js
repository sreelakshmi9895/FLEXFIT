// w a p to check a number is prime or not
// prime number : 2 3 5 7 11
// input:5
// generate numbers from 2 to half of the input
// check input divisble for each number of loop
 
var prompt = require('prompt-sync')();
var num = prompt('Input a number: ');
var isPrime= true
for(let i=2;i<=num/2;i++){
 if(num%i==0){
 isPrime = false
 break
 }
}
console.log(isPrime?`${num} is A PRIME NUMBER`: `${num} is NOT A PRIME NUMBER`);
