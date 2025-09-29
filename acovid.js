//[ no,district,+ve cases,death rate,curred rate,1st dose vaccine,2nd dose vaccine]
covid_data = [
    [1,'Ernakulam',34000,2000,23000,20000,2000],
    [2,'Idukki',14000,3000,25000,30000,1000],
    [3,'Thrissur',24000,4000,33000,24000,2500],
    [4,'Pathanamthitta',20000,2000,45000,22000,1500],
    [5,'Kozhikode',44000,5000,12000,21000,500],
    [6,'Palakkad',12000,1000,20000,23000,3400],
    [7,'Kottayam',27000,1500,27000,14000,1000],
    [8,'Kollam',14000,2500,25000,18000,2700]

]

//1. district having Highest +ve case 
const dangerZone = covid_data.reduce((prev,data)=>prev[2]>data[2]?prev:data)
console.log(`District having highest +ve case :District '${dangerZone[1]}'  case : '${dangerZone[2]}`);


//2. district having Highest 1st dose vaccine
FirstDose = covid_data.reduce((prev,data)=>prev[5]>data[5]?prev:data)
console.log(`District having highest 1st dose vaccine:District :'${FirstDose[1]} 1st vaccine :'${FirstDose[5]}`);

//3. district having lowest death rate
LowestDeath = covid_data.reduce((prev,data)=>prev[3]<data[3]?prev:data)
console.log(`District having lowest death rate: District -'${LowestDeath[1]}' and case-'${LowestDeath[3]}'`);

//4. sort data with +ve case in descending order
covid_data.sort((a,b)=>b[2]-a[2])
covid_data.forEach(data=>console.log(`District:'${data[1]}, +ve Cases '${data[2]}`))

//5. is there any district with +ve cases > 15000
console.log(`Is there any district with +ve cases >15000 : ${covid_data.some(data=>data[2]>15000)?'yes':'no'}`);
console.log(`Is all district with +ve cases >15000 : ${covid_data.every(data=>data[2]>15000)?'yes':'no'}`);

//6. sort data with 1st dose vaccine
covid_data.sort((a,b)=>a[5]-b[5]).forEach(data=>console.log(`District : ${data[1]},1st Dose Vaccine 
count:${data[5]}`))

//7. Print Thrissur details
districtDetails = covid_data.find(data=>data[1]=="Thrissur")
console.log(`${districtDetails}`);

//8. Print total number of positive cases
console.log(`Total number of positive cases reported in all district : ${covid_data.map(data=>data[2]).reduce
((prev,num)=>prev+num)}`);

//9. Print total number of curred cases
console.log(`Total number of curred cases reported in all district : ${covid_data.map(data=>data[4]).reduce
((prev,num)=>prev+num)}`);
//10. Print curred cases in Idukki
idukkiDetails = covid_data.find(data=>data[1]=="Idukki")
console.log(`Curred cases in idukki is : ${idukkiDetails[4]}`);
