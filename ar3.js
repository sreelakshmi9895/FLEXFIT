// check number 2 is present in given array

var numArray = [20,13,45,2,7,89.57,39]
let search=2
let found=false
for(let num of numArray){
   if(num==search){
    found=true
    break 
   }
}
if(found){
     console.log("NUMBER IS PRESENT");
}
else{
     console.log("NUMBER not PRESENT");
}