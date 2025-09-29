// write a program to swap the number
// num1=10 , num2=20
// output : num1=20 num1=10

var num1=10
var num2=20
var temp
console.log(`before swapping num1 = ${num1}, num2 = ${num2}`);
// assign num1 to temp
temp=num1
//assign num2 to num1
num1=num2
// assign temp to num2
num2=temp
console.log(`after swapping num1 = ${num1}, num2 = ${num2}`);