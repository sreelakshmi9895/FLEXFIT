var days = ["MONDAY" ,"TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"]
console.log(days);
console.log(`First item of days: ${days[0]}`);
console.log(`Total items of days: ${days.length}`);
console.log(`Last item of days: ${days[days.length-1]}`);
console.log(`The type of array is:${typeof days}`);
days.push('weekends-push')
days.unshift('weedays-unshift')

console.log("Displaying array usig normal loop");
for(let index=0;index<days.length;index++){
    console.log(days[index]);
}
days.pop()
console.log("Displaying array usig for-of loop");
for(let item of days){
    console.log(item);  
}
days.shift()
console.log("Displaying array usig in loop");
for(let index in days){
    console.log(days[index]);  
}
