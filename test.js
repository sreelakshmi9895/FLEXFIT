// count numbers
var prompt = require('prompt-sync')();
var num = (prompt("Enter a positive number: "));

var temp = Math.floor(num);  
var count = 0;
if (temp === 0) {
    count = 1;
} 
else {
    while (temp > 0) {
        temp = Math.floor(temp / 10);  
        count = count + 1;             
    }
}

console.log("Number of digits:", count);


// leap year
var prompt = require('prompt-sync')();
var year =(prompt("Enter a year: "));

if ((year%4===0 && year%100!==0) || (year % 400 === 0)){
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is NOT a Leap Year");
}

//hollow pattern
let rows = 5;
let cols = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
 for (let j = 1; j <= cols; j++) {
    if (i === 1 || i === rows || j === 1 || j === cols) {
        pattern += "*";
    } else {
        pattern += " ";
    }
}
    pattern += "\n";
}
console.log(pattern);

// sum of prime numbers
var prompt = require('prompt-sync')();
var n = (prompt('Enter a number: '));
var sum = 0;
for (let num = 2; num <= n; num++) {
    let isPrime = true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += num;
    }
}
console.log(`Sum of all primes up to n is: ${sum}`);


// operator
var prompt = require('prompt-sync')();
var num1 = (prompt("Enter first number: "));
var num2 = (prompt("Enter second number: "));
var oper = (prompt("Enter operator (+, -, *, /): "));
var result; 
if (oper === "+") {
    result = num1 + num2;
} else if (oper === "-") {
    result = num1 - num2;
} else if (oper === "*") {
    result = num1 * num2;
} else if (oper === "/") {
        result = num1 / num2;
    } 
else {
    result = "not working!!!!";
}
console.log("Result:", result);

// triangle
var prompt = require('prompt-sync')();
var a = (prompt("Side a: "));
var b = (prompt("Side b: "));
var c = (prompt("Side c: "));
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Equilateral triangle");
} else if (a === b || b === c || a === c) {
    console.log("Isosceles triangle");
    } else {
  console.log("Scalene triangle");
    }
} else {
    console.log("Not a triangle");
}

