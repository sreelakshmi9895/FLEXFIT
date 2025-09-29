// print the pattern
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4
for(let row=1;row<=4;row++){
    let rowContent=""
    for(let col=1;col<=row;col++){
        rowContent+= row+" "
    }
    console.log(rowContent);
    
}
 // 9 Perfect Number Check
var prompt = require('prompt-sync')();
var num = Number(prompt("Enter a number: "));
var sum = 0;
for (var i = 1; i < num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}
if (sum === num) {
    console.log(num + " is a Perfect Number");
} else {
    console.log(num + " is NOT a Perfect Number");
}
