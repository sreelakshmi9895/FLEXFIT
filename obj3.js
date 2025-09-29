const sentance = "Hello Hai all Hai Welcome all"
//  w a p to print the count of each word in the sentance
// output : Hello:1 ,Hai:2,all:2,welcome:1

// create output object

// split sentance into word of array
// get each word from array and check word is in output object
// if word is in output object : update value of word in object
// if word is not in output object : insert word into output object as word:count
const output ={}
sentance.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);
