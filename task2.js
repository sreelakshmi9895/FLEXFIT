// fibnoccia series
let n=10
let a=0,b=1
console.log(a);
for(let i=1;i<n;i++){
    console.log(b);
     let nextterm = a+b;
     a=b;
     b=nextterm
}


// prime numbers btw 2 numbers
let startNum=2 ,endNum=25
for(let i=startNum;i<=endNum;i++){
   let isPrime = true;
   for(let j=2;j<i;j++){
    if(i%j===0){
     isPrime=false;
    break;
   }
    }
    if(isPrime) console.log(i);
    
}

