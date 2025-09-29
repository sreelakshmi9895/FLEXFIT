nestedArray =[10,20,30,45,6,7,23,89]
// print least number
console.log(nestedArray.reduce((prev,num)=>prev<num?prev:num));

// print largest number
console.log(nestedArray.reduce((prev,num)=>prev>num?prev:num));

// print total number
console.log(nestedArray.reduce((prev,num)=>prev+num));

// print a new array with sqaures of each numbers in original array
console.log(nestedArray.map(item=>item**2));


