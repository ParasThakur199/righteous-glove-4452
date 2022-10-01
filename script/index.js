import { Navbar } from '../components/Navbar.js'
import { footer } from '../components/footer.js'

let navbar_div = document.getElementById('Navbar')
navbar_div.innerHTML = Navbar();

let footer_div = document.getElementById('footer')
footer_div.innerHTML = footer();

let user=JSON.parse(localStorage.getItem('userInfo')) 
let searchBtn=document.getElementById('search')
searchBtn.addEventListener('click',(event)=>{

    event.preventDefault();

    console.log("hi")

    let location=document.getElementById('city').value;

    let date=document.getElementById('fromDate').value;

    let date1=document.getElementById('toDate').value;

    let obj={
        location,
        date,
        date1,
    }

    // user.push(obj)

    localStorage.setItem('userInfo',JSON.stringify(obj))
    window.location.href='./products.html'
})