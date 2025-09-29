// w a p to display the numbers whose exponents are in the given range 8<=num**exponent<=36
// user input=2, output=3,4,5,6
// user input=3, output=2,3


var prompt = require('prompt-sync')();
var exponent = prompt('Input your exponent: ');

var num=1
while(num<=36){
  8<=num**exponent && num**exponent<=36 && console.log(num);
  num++
}