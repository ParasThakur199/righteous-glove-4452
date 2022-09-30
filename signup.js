function details(em,p){

  
    this.email = em;
    this.password = p
}
let arr = JSON.parse(localStorage.getItem("user")) || []

document.getElementById("next").addEventListener("click",function(){
    myfun()
})

const myfun = () => {

    let email = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    let s1 = new details(email,password)

    if( s1.email == "" || s1.password == ""){
        alert("Some Fields are missing")
    }else{
        arr.push(s1)
                   
        localStorage.setItem("user",JSON.stringify(arr))
        console.log(arr)
        window.location.href = "sample.html"
        alert("SignUp Successful!😊")
        
    }

}

