 const employeeDetails ={
    empId:1000,
    empName:'Neel',
    empDesgnation:'developer',
    empLocation:'kochi',
    empSalary:25000,
    empExperience:3
 }
 console.log(employeeDetails);
//  square notation
console.log(`Employee Name : ${employeeDetails['empName']}`);
// Dot notation
console.log(`Employee Desgnation:${employeeDetails.empDesgnation}`);
// check empAddress in empDetails
console.log(`Is empAddress in employeeDetails : ${"empAddress" in employeeDetails?employeeDetails.empAddress: "Not Available"}`);
console.log(`Employee Location: ${employeeDetails.hasOwnProperty('empLocation')?employeeDetails.empLocation: "Not Available"}`);

console.log("insert vaccination & phone number to employeeDetails");
employeeDetails['isVaccinated']=true
employeeDetails.empPhone = "9894993733"
console.log(employeeDetails);
console.log('Increment salary by 5000');
employeeDetails.empSalary+= 5000
console.log(employeeDetails);

console.log("Display all keys in employeeDetails");
console.log(Object.keys(employeeDetails));
console.log("Display all values in employeeDetails");
console.log(Object.values(employeeDetails));

console.log("Display all key-value pairs one by one");
for(let key in employeeDetails){
   console.log(`${key}:${employeeDetails[key]}`);
}

console.log("Object Destructuring");
const {empId,empName,empDesgnation,empLocation,empSalary,empExperience,isVaccinated,empPhone
}=employeeDetails
console.log(`Employee Name: ${empName}`);











 