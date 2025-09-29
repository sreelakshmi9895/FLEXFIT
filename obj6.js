weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}


const output = {}
weatherData.forEach(districtDetails=>{
const district =districtDetails.district
const currTemp =districtDetails.temp
if(output.hasOwnProperty(district)){
    const oldTemp = output[district]
if (currTemp>oldTemp){
    output[district]=currTemp
}
}else{
    output[district]=currTemp
}
})
console.log(output);

