// print common numbers from the given arrays: 11,20,39
let a1=[10,11,12,20,39]
let a2=[11,20,25,37,39]

for(let num1 of a1){
    for(let num2 of a2){
        if(num1==num2){
            console.log(num1);
            break
        }
    }
}