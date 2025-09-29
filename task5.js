// sum of prime numbers upto n
let n=12,sum=0
for(let i=2;i<=n;i++){
    let isPrime=true;
 for(let j=2;j<i;j++){
    if(i%j===0)
        isPrime=false;
 }
 if(isPrime) sum=+i
}
console.log(sum);


// max product of any 3 numbers
function maxProduct(arr){
    arr.sort((a,b)=>b-a);
    return arr[0]*arr[1]*arr[2]
}
console.log(maxProduct([1,2,3]));


