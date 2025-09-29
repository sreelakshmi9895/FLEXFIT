//Task 1
//find the first recursive character from the given pattern="ABBCCBAD"
//ans: B
pattern="ABBCCBAD"
const output ={}
const charArray = pattern.split("")
for(let char of charArray){
    if(output.hasOwnProperty(char)){
        console.log(`First Recursive character is ${char}`);
       break
    }
    else{
    output[char]=1
       } 
    }




