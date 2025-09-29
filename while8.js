// w a p to print to check a 3 digit number is Amstrong -number is equal to its cube of each digit of the number=xyz=x^3+y^3+z^3
var num=121
const input = num
var sum=""
while(num>0){
   let lastdigit=num%10
   sum+=lastdigit
   num=Math.floor(num/10)
}
console.log(`sum of cube of digit of a input = ${sum}`);

console.log(input==sum?'AMSTRONG':'NOT AMSTRONG');

