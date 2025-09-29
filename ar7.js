// Binary Search
var numArray = [20,13,45,2,7,89,57,39]
var count = 0
let search = 2
let found = false
numArray.sort((a,b)=>a-b)
// console.log(numArray);
let low = 0
let up = numArray.length-1
while(low<=up){
    count++
    let mid = Math.floor((low+up)/2)
    if(numArray[mid]==search){
        found = true
        break
    }
    else if(numArray[mid]>search){
        up = mid-1
    }
    else{
        low=mid+1
    }
    }
    console.log(`Execution time : ${count}`);
    if(found){
        console.log('NUMBER PRESENT');
    }
    else{
        console.log('NUMBER not PRESENT');
        
    }

