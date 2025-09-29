// 1 Triangle -Isosceles,Equilateral,Scalene
var prompt = require('prompt-sync')();
var a =(prompt("Enter side a: "));
var b =(prompt("Enter side b: "));
var c =(prompt("Enter side c: "));
if((a+b>c && a+c>b && b+c>a)){
    if(a===b && b===c){
        console.log("It is an Equilateral triangle");
    }
    else if(a===b || b===c||a===c){
        console.log("It is an Isosceles triangle");
    }
    else{
        console.log("Scalene traiangle");
    }
}
else{
    console.log("Not a triangle");
    
}


// 2 Months- (spring, summer, autumn, or winter)
var prompt = require('prompt-sync')();
var month =(prompt("Enter a month: "));
if(month==="march" || month==="april" || month==="may"){
    console.log(`season:Spring`);
}
else if(month==="june" || month==="july" || month==="august"){
   console.log(`season:summer`);
}
else if(month==="september" || month==="october" || month==="november"){
   console.log(`season:Autumn`);
}
else if(month==="december" || month==="january" || month==="february"){
   console.log(`season:Winter`);
}
else{
    console.log("not a month");
    
}

// 3 Leap Year or Not 
var prompt = require('prompt-sync')();
var year =(prompt("Enter a year: "));
 if((year%4===0) && (year%100!==0) || (year%400===0)){
    console.log(year + " Is a Leap Year");
 }
 else{
    console.log(year + " Is not a Leap Year");
 }

//  4 
// 5 enter two numbers and an operator (+, -, *, /), then output the result of the operation.
var prompt = require('prompt-sync')();
var num1 = (prompt("Enter first number: "));
var num2 = (prompt("Enter second number: "));
var operator = (prompt("Enter the operator(+,-,*,/): "));
var result;
if(operator==="+"){
  result=num1+num2
}
else if(operator==="-"){
    result=num1-num2
}
else if(operator==="*"){
    result=num1*num2
}
else if(operator==="/"){
    result=num1/num2
}
else{
    result = "not working!!!!!"
}
console.log(`Result : ${result}`);

// 6 Fibonacci sequence
var prompt = require('prompt-sync')();
var n = Number(prompt("Enter the number of terms: "));
var n1 = 0
var n2 = 1 
var nextTerm;
console.log("Fibonacci Sequence:");
for (var i = 1; i <= n; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

