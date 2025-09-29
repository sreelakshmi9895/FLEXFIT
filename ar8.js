const numArray = 
[
     [20,30],
    [15,78],
    [89,76],
     [9,67]
]
// smallest number
const smallest = numArray.flat(1).reduce((prev,num)=>prev<num?prev:num)
console.log(smallest);

// largest number
const largest = numArray.flat(1).reduce((prev,num)=>prev>num?prev:num)
console.log(largest);
// total number
const totalNumber = numArray.flat(1).reduce((prev,num)=>prev+num?prev:num)
console.log(totalNumber);