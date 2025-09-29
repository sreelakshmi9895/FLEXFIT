var car ={
    name:"boleno",
    model:"hatch-back",
    manufacturer:"Maruti Suzuki",
    price:"13 lakh"
}

//display car name and its manufacturer
console.log(`car name:${"boleno"} & manufacturer:${"Maruti Suzuki"} `)

//check 'model' key is present then display its value
console.log(`Is model  present: ${car.hasOwnProperty('model')?car.model: "Not Present"}`);

//add 'varient' as automatic, manual
car.varient= "automatic,manual"
console.log(car);

//add color as red,white,blue,ash,black
car.color = "red,white,blue,ash,black"
console.log(car);
