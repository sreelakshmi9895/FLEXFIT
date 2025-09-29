// w a p to print a number is palindrome or not
var num=121
const input = num
var rev=""
while(num>0){
   let lastdigit=num%10
   rev+=lastdigit
   num=Math.floor(num/10)
}
console.log(rev);
console.log(input==rev?'PALINDROME':'NOT PALINDROME');


