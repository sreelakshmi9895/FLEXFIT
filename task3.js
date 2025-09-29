// pascals triangle
 let row=7
 for(let i=1;i<row;i++){
    let num=1;
    let line="";
 for(j=0;j<=i;j++){
    line+=num+"";
    num= num*(i-j)/(j+1);
 }
 console.log(line);
 }

//  perfect number
let num=28
let sum=0
for(let i=1;i<num; i++){
  if(num%i===0)
    sum+=i;
}
if(sum===num)console.log(num+" is a perfect number");
else console.log(num+" is not a perfect number");



