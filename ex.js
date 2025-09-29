var prompt = require('prompt-sync')();
var num = (prompt("Input and arthmetic expression: "));
try{
    const result =eval(exp)
    console.log(`Result = ${result}`);
    
}catch(err){
    console.log("Invalid Expression!!!");
    
}
console.log("Task completed");

