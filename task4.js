// fibnoccia and sum of prime of even numberss
let limit = 50;
let a = 0, b = 1, sumEven = 0;

while(a <= limit){
    if(a % 2 === 0) sumEven += a;
    let next = a + b;
    a = b;
    b = next;
}
console.log("Sum of even Fibonacci numbers:", sumEven);

// permutation of string
function permute(str, prefix=""){
    if(str.length === 0) console.log(prefix);
    for(let i=0; i<str.length; i++){
        permute(str.slice(0,i) + str.slice(i+1), prefix + str[i]);
    }
}
permute("xyz");

// prime
function isPrime(n){
    if(n<2)
        return false;
    for(let i=2;i<n;i++){
        if(n%i===0)
   return false;
        }
return true;
    }
    console.log(isPrime(7));
    

