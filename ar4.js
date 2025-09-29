// print duplicate numbers
let duplicateArray=[10,20,30,10,20,23,78,34]
for(let i=0;i<duplicateArray.length;i++){
    for(let j=i+1;j<duplicateArray.length;j++){
        if(duplicateArray[i]==duplicateArray[j]){
            console.log(duplicateArray[i]);
            break
        }
    }
}

