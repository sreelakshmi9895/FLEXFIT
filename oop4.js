function add(...args){
    console.log("ARGUMENT METHOD");
    console.log(args);
    console.log(`Result= ${args.reduce((prev,cur)=>prev+cur)}`);
    
}
add(10,30)
add(10,30,20)
add(10,30,20,40)