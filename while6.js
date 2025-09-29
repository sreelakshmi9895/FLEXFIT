// w a p to print reverse of a number 
var num=123
var rev=0
while(num>0){
    rem=num%10
    rev=rem+rev*10
    num=Math.floor(num/10)
}
console.log(rev);
