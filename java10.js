// print "fizz" if the no is divisble by 3 ,"Buzz" if the no divisble by 5,"FizzBuzz" if the no is divible by 15
var num1=45
// if(num1%15==0){
//     console.log(`fizzbuzz`); 
// }
// else if(num%5==0){
// console.log(`fizz`); 
// }
// else if(num%3==0){
//     console.log(`buzz`); 
// }
// else{
//     console.log('try another');  
// }
console.log(num1%15==0?`fizzbuzz`:num%5==0?`fizz`:num%3==0?`buzz`:'try another');
