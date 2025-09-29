const expenses = [23000,34000,12000,45000,36000,50000,10000]
// smallest expenses
// highest expenses
// total expenses

let smallest =expenses[0]
for(let num of expenses){
    if(num<smallest){
        smallest = num
    }
}
console.log(`Least expense is: ${smallest}`);


let largest = expenses[0]
for(let num of expenses){
    if(num>largest){
        largest=num
    }
}
console.log(`Largest expense is:${largest}`);


let sum =0
for(let num of expenses){
    sum+= num
}
console.log(`Total expense is: ${sum}`);


