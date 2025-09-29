
//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name
products.forEach(item=> console.log(item[1]))

//2. display product whose price < Rs.50
products.filter(item=>[2]<50).forEach(item=>console.log(`Name: ${item[1]},price: ${item[2]}`))

//3. print price of oreo
console.log(`-----price of oreo : ${products.find(item=>item[1]=="oreo")[2]}------`);

//4. print costly product name
console.log(`-----costly product name: ${products.reduce((prev,cur)=>prev[2]>cur[2]?prev:cur)[1]}-----` );


//5. display out of stock product
products.filter(item=>item[3]==0).forEach(item=>console.log(item[1]))

//6. sort products based on stock in decsending order
products.sort((a,b)=>b[3]-a[3]).forEach(item=>console.log(`Name: ${item[1]},stock: ${item[3]}`))

//7. print product having maximum available stock
console.log(`product having maximum available stock : ${products.reduce((prev,cur)=>prev[3]>cur[3]?prev:cur)[1]}`);


//8. is there any product can be purchased by Rs. 10
console.log(`is there any product can be piurchased by RS.10: ${products.some(item=>item[2]<=10)?'yes':'no'}`);

//9. Is there any product in the range of 10 to 30
console.log(`------is there any product in the range of 10 to 30: ${products.some(item=>item[2]>=10
 && item[2]<=30)?'yes':'no'}------`);

//10. print all products in the range of 10 to 30
console.log('print all products in the range of 10 to 30');
