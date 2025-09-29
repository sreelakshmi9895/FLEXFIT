const MarutiCar={
    name:"Boleno",
    model:"Hatchback",
    price:"12 Lakhs"
}
const toyotaCar ={
 name:"Glanza",
 price:"14 Lakhs"
}
toyotaCar.__proto__ = MarutiCar
console.log(`Name:${toyotaCar.name} Model:${toyotaCar.model}`);
