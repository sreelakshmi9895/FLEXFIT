//                   *
//             *          *
//        *         *         *
//     *       *        *         *

for(let row=1;row<=4;row++){
    let rowContent = ""
    // space
    for(let space=3;space>=row;space--){
        rowContent += " "
    }
    // column
    for(let col=1;col<=row;col++){
        rowContent += "* "
    }
    console.log(rowContent);
    
}