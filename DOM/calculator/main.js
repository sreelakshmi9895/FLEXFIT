// display contents in calculator screen
const displayContent = (content)=>{
 result.value += content
}
// display clear calculator screen
const clearCalcDisplay =()=>{
 result.value =""
} 
// evaluate
const calculatorEval=()=>{
   result.value=eval( result.value)
}
// remove last
const lastDigitCalcScreen = ()=>{
    result.value=result.value.slice(0,-1)
}