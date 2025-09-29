const globalData = "GLOBAL VARIABLE"
console.log("CLOSURE PROPERTY");

 const parentFunction =()=>{
    const parentData = "PARENT VARIABLE"
    console.log(`Inside parentFunction, parent data is: '${parentData}' and global data is: '${globalData}'`);
   return ()=>{
        const childData = "CHILD VARIABLE"
    console.log(`Inside childFunction, child data is: '${childData}, parent data is: '${parentData}' and global data is: '${globalData}'`);
    }
 }
const childFunction = parentFunction()
childFunction()