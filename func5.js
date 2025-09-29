// factorial using recurssive function
// 4!=4*3*2*1
 const factorial=(num)=>{
    if(num==1){
        return 1
    }
    return num*factorial(num-1)
 }
 console.log(factorial(4));
 