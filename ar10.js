nameArray =["milli","rini","sini","mini"]

// is mini is in given array
console.log(`is mini is in given array: ${nameArray.includes("mini")?"yes":"no"}`); 

// display the index of mini
console.log(`index of mini : ${nameArray.indexOf("mini")}`);

// delete sini from the given array
nameArray.splice(nameArray.indexOf("sini"),1,"lini")
console.log(nameArray);

anotherArray = ["molly","dolly","sally"]
console.log(nameArray.concat(anotherArray));
console.log([...nameArray,...anotherArray]);
console.log(nameArray.join(" "));



