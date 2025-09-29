//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]
// find employee with highest salary : reduce
highestSalaryEmp = employee.reduce((prev,emp)=>prev[4]>emp[4]?prev:emp)
console.log(`Highest Salaried Employee :'${highestSalaryEmp[1]}' and Salary : '${highestSalaryEmp[4]}'`);

//  find employee with least salary : reduce
leastSalaryEmp = employee.reduce((prev,emp)=>prev[4]<emp[4]?prev:emp)
console.log(`Least Salaried Employee :'${leastSalaryEmp[1]}' and Salary : '${leastSalaryEmp[4]}'`);

//  find employee with first least salary : reduce
leastFirstSalaryEmp = employee.reduceRight((prev,emp)=>prev[4]<emp[4]?prev:emp)
console.log(`Least First Salaried Employee :'${leastFirstSalaryEmp[1]}' and Salary : '${leastFirstSalaryEmp[4]}'`);

// find all employees total salary
const totalSalary = employee.map(emp=>emp[4]).reduce((prev,num)=>prev+num)
console.log(`All employees total salary : ${totalSalary}`);

//1. print all employee name
// console.log("-----all employee----");
// for(let emp of employee){
//     console.log(emp[1]);
// }
console.log("-----all employee name----");
employee.forEach(emp=>
    console.log(emp[1]))
//2.print total number of employee
console.log(`Total Number of employees:${employee.length}`);


//3. print developer employee details
 console.log('------developer employee----');
 for(let emp of employee){
    if(emp[2]=="developer"){
        console.log(emp[1]);
    }
 }
console.log('------developer employee----');
employee.filter(emp=>emp[2]=="developer").forEach(item=>console.log(`Name:${item[1]},Desnation:${item[2]}`))
//4. print employee whose salary > 30000
console.log('-----salary>3000---');
for(let emp of employee){
    if(emp[4]>30000){
        console.log(emp[1]);
        
    }
}

employee.filter(emp=>emp[4]>30000).forEach(item=>console.log(`Name:${item[1]},Desgnation:${item[4]}`)
)
//5. print details of employee Laisha
for(let emp of employee){
    if(emp[1]=="Laisha"){
     console.log(emp); 
    }
}
 
const emp=employee.find(emp=>emp[1]=="Laisha")
console.log(emp); 
//6. Sort employee based on their salary in descending order
employee.sort((a, b) => b[4] - a[4]);
for(let emp of employee){
    console.log(`${emp[1]}`);
    
}

//7. Sort employee based on their experience in ascending order
// console.log('-----experience in ascending oredr-----');

// employee.sort((a, b) => a[5] - b[5]);
// for(let emp of employee){
//     console.log(`${emp[1]}`);
// }

const output=employee.toSorted((a, b) => a[5] - b[5]);
console.log(output);
