import { Navbar } from "./components/Navbar.js";

let div=document.getElementById("Navbar")

div.innerHTML=Navbar();


import { footer } from "./components/footer.js";


let foot=document.getElementById("footer")

foot.innerHTML=footer()








let model1 = document.querySelector(".modal1");
let accept = document.querySelector(".accept");
let del = document.querySelector(".del");
let main = document.querySelector(".main");
let head = document.createElement("h1");
accept.addEventListener("click", () => {
  main.classList.remove("show");
});

let decline = document.querySelector(".decline");
decline.addEventListener("click", () => {
  main.classList.remove("show");
});

del.addEventListener("click", () => {
  main.classList.remove("show");
});

model1.addEventListener("click", (e) => {
  main.classList.add("show");

  console.log("1");
});

main.insertAdjacentElement("afterbegin", head);


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

let name;

const detail = (obj) => {
    let count = 0;
    let temp = 0;

    let arr = JSON.parse(localStorage.getItem("user"))

    arr.forEach(function(ele){

        if(ele.email == obj.name && ele.password == obj.pass){
            name=ele.email;
            count++
            // alert("hello")
        }else{

            temp++
            // alert("no")
        }
    })
    if(count >= 1 && temp < arr.length){
        
        window.location.href = "sample.html"
        alert("login successful")
     
    }else{
        alert("Unseccessful")
    }

}

