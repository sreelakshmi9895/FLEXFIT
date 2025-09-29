// Task: write a program to input 3 different numbers and print the second largest number and also print them in ascending order
var num1=4
var num2=8
var num3=10
if(num1>num2 && num1>num3){
    // console.log(`Heighest :num1`);
   if(num2>num3){
    console.log(`Second largest num2`);
    console.log(`Ascebding order:${num3},${num2},${num1}`);
   }
   else{
    console.log(`Second largest num3`);
    console.log(`Ascending order:${num2},${num3},${num1}`);
   }
}
else if(num2>num1 && num2>num3){
    // console.log(`Heighest :num2`);
   if(num1>num3){
    console.log(`Second largest num1`);
    console.log(`Ascebding order:${num3},${num1},${num2}`);
   }
   else{
    console.log(`Second largest num3`);
    console.log(`Ascending order:${num1},${num3},${num2}`);
   }
}
else if(num3>num1 && num3>num2){
    // console.log(`Heighest :num3`);
   if(num1>num2){
    console.log(`Second largest num1`);
    console.log(`Ascebding order:${num1},${num1},${num3}`);
   }
   else{
    console.log(`Second largest num2`);
    console.log(`Ascending order:${num1},${num2},${num3}`);
   }
}
