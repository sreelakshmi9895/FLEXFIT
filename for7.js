//  w a p to find GCD/HCF of any 2 numbers
var prompt = require('prompt-sync')();
var num1 = prompt('Input first number: ');
var num2 = prompt('Input second number: ');
var gcd=1
 if(num1<num2){
    // smallest num1
    for(let i=1;i<=num1;i++){
        if(num1%i==0 && num2%i==0){
            gcd=i
        }
    }
 }
 else{
    // smallest num2
    for(let i=1;i<=num2;i++){
        if(num1%i==0 && num2%i==0){
            gcd=i
        }
 }
}
console.log(`GCD(${num1},${num2})= ${gcd}`);
