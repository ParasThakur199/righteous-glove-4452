let arr = JSON.parse(localStorage.getItem("user")) || []

document.getElementById("next").addEventListener("click",function(){
    
    newLog()
})
 console.log(arr)

const newLog = () => {

    let name1 = document.getElementById("mail").value;
    let pass1 = document.getElementById("password").value;


    let obj = {
        name : name1,
        pass : pass1
    }

    detail(obj)

}

const detail = (obj) => {
    let count = 0;
    let temp = 0;

    let arr = JSON.parse(localStorage.getItem("user"))

    arr.forEach(function(ele){

        if(ele.email == obj.name && ele.password == obj.pass){
            
            count++
            // alert("hello")
        }else{

            temp++
            // alert("no")
        }
    })
    if(count >= 1 && temp < arr.length){
        
        window.location.href = "./index.html"
        alert("Congratulations!! login successfully😀");
    }else{
        alert("Please Check Credientials😥")
    }

}