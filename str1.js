const username = "My name is Ana"
console.log(`username: ${username}`);
console.log(`Total characters in username: ${username.length}`);
console.log(`Substring of username: ${username.substring(0,5)}`);
console.log(`Slice of username : ${username.slice(0,-2)}`);
console.log(`username in uppercase: ${username.toUpperCase()}`);
console.log(`username in lowercase: ${username.toLowerCase()}`);
console.log(`is username stratswith "M" : ${username.startsWith ("M")}`);

const email = "    xyz@gmail.com"
console.log(`is email is an valid gmail: ${email.endsWith("@gmail.com")}`);
console.log(email.split(""));
console.log(username.split(" "));
console.log(`Total characters in email : ${email.length}`);
console.log(`trim white space from email: ${email.trim().length}`);
console.log(`Is Ana is included in username : ${username.includes("Ana")}`);













