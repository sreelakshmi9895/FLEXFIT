// w a p to print the vowels in the string
var prompt = require('prompt-sync')();
var input = prompt('Input a data: ');
const vowels = ["a","e","i","o","u"]
console.log(`vowels in input: ${input.split("").filter(char=>vowels.includes(char))}`);

// print word count of given paragraph
const data = "Balloons are pretty and come in different colors, different shapes, different sizes, and they can even adjust sizes as needed. But don't make them too big or they might just pop, and then bye-bye balloon. It'll be gone and lost for the rest of mankind. They can serve a variety of purposes, from decorating to water balloon wars. You just have to use your head to think a little bit about what to do with them."
console.log(`word count of the given paragraph : ${data.split(" ").length}`);

// search a string is available in the  given array then print product details else print not found
