let body= document.getElementsByTagName("body");
let loading = document.querySelector(".process");
function isempty(){
    let arr=[];
    let input1=document.querySelector(".inputotp1").value;
    let input2=document.querySelector(".inputotp2").value;
    let input3=document.querySelector(".inputotp3").value;
    let input4=document.querySelector(".inputotp4").value;
    let input5=document.querySelector(".inputotp5").value;
    
    if((input1 !== "")&&(input2 !== "")&&(input3 !== "")&&(input4 !== "")&&(input5 !== "")){
        let btn = document.querySelector("#btn");
        btn.removeAttribute("disabled"); 
        btn.style.backgroundColor="#4c1e80";
        btn.style.color="white";
        btn.addEventListener("click",function(){
        
        arr.push(input1,input2,input3,input4,input5);
        
        function getData(){
            if(arr.join("") === "12345"){
                return true;
            }
        } 
        

        let mypromise = new Promise(function(resolve,reject){
            let flag = false;
            setTimeout(function(){
                flag=getData();
                if(flag){
                    resolve("successfull");
                }else{
                    reject("failed");
                }
            },1000);
        }).then(function(res){
            let timer=setInterval(function(){
                loading.src="https://c.tenor.com/gJLmlIn6EvEAAAAM/loading-gif.gif";
                // body.append(loading);
                
            },1000);

            // clearInterval(timer);
        }).then(function(res){
            setTimeout(() => {
                location.href="./successfull.html";
            }, 6000);      
        }).catch(function(err){
            location.href="./failed.html";
        })

        })
    }
    
        
}