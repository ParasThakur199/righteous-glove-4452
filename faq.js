import {navbar} from './components/navbar.js'

import {footer} from './components/footer.js'

let navbar_div=document.getElementById('navbar')
navbar_div.innerHTML=navbar()

let footer_div=document.getElementById('footer')
footer_div.innerHTML=footer()


// const click=()=>{

//     let content1=document.getElementById('btn1')

// }