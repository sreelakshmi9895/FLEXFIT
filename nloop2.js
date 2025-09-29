// print pattern
// 1 1 1 1 
// 2 2 2 2 
// 3 3 3 3 
// 4 4 4 4 

for(let row=1;row<=4;row++){
    let rowContent = ""
    for(let col=1;col<=4;col++){
        rowContent += row+' '
    }
    console.log(rowContent);
    
}