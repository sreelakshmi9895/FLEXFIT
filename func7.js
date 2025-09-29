console.log("CURRYING FUNCTION");


const add = a =>{
    return b=>{
        return c=>{
            return c+b+a
        }
    }
}
console.log(add(2)(3)(4));
