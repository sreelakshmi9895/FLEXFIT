// print pairs whose sum is 7 : 2,5 && 3,4
const pairSumArray =[2,3,4,5]
const pairSum = 7
for(let i=0;i<pairSumArray.length;i++){
    for(let j=i+1;j<pairSumArray.length;j++){
        if(pairSumArray[i]+pairSumArray[j]==pairSum){
            console.log(`(${pairSumArray[i]},${pairSumArray[j]})`);
        }
    }
}