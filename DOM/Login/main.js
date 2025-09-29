const login = ()=>{
    const userInputName = username.value
    const userInputpswrd = password.value
    if(userInputName && userInputpswrd){
        // store username to local storage
    localStorage.setItem("user",userInputName)
        // redirect to dashboard
        window.location="dashboard.html"
}else{
            alert("please input valid data")
        }
}