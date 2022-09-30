let container = document.querySelector('.storedata');
let storageData = JSON.parse(localStorage.getItem('carstore'));
console.log(storageData);

let appendData = (data) => {
    container.innerHTML = null;
   
        let div = document.createElement('div');
        div.setAttribute('class', 'singleData');
        let name = document.createElement('h3');
        name.innerText = data.Name;
        name.setAttribute('class','name');
        let img = document.createElement('img');
        img.setAttribute('src', data.Image);
        img.setAttribute('class','mainImg');
        let frnt = document.createElement('div');
        frnt.setAttribute('id', 'front');

        let bagdiv1 = document.createElement('div');
        bagdiv1.setAttribute('class', 'bagdiv1');
        let gearimg = document.createElement('img');
        gearimg.setAttribute('src', 'https://cdn-user-icons.flaticon.com/75503/75503467/1664465433610.svg?token=exp=1664466413~hmac=83195ff34b9e1618a656277bcb38a3f1');
        gearimg.setAttribute('class','gearImg');
        let Trans = document.createElement('p');
        Trans.innerText = data.Transmission;
        Trans.setAttribute('class','textdata');
        bagdiv1.append(gearimg,Trans);

        let bagdiv2 = document.createElement('div');
        bagdiv2.setAttribute('class', 'bagdiv2');
        let seatimg = document.createElement('img');
        seatimg.setAttribute('src', 'https://cdn-user-icons.flaticon.com/75503/75503467/1664473319702.svg?token=exp=1664474221~hmac=b4d8ba8d6c5d85d96291c397a76266ef');
        seatimg.setAttribute('class','seatimg');
        let Seats = document.createElement('p');
        Seats.innerText = `${data.Seats} seats `;
        Seats.setAttribute('class','textdata');
        bagdiv2.append(seatimg,Seats);

        frnt.append(bagdiv1,bagdiv2);
        let secdiv = document.createElement('div');
        secdiv.setAttribute('class', 'front');

        let priceget = document.querySelector('.pricedata');
        priceget.innerText = data.Price;
        let total = data.Price+400+2500;
        var discounted_price=0;
        let promobtn = document.querySelector('.promobtn');
        let totalprice = document.querySelector('.total');
        totalprice.innerText=`${total}`;
                console.log(totalprice);
        promobtn.addEventListener('click',(()=>{
            let promoinput = document.querySelector('.promoinput').value;
            console.log(promoinput);         //discounted_price = original_price - (original_price * discount / 100)
            if(promoinput=='masai123'){
                alert('Woow😎 You got 30% Off');
                let original_price = data.Price+400+2500;
                console.log(original_price)
                discounted_price = original_price-(original_price*30/100);
                totalprice.innerText=`${discounted_price}`;
            }else{
                alert('Please Check Your Promo-Code 😥');
                totalprice.innerText=`${total}`;
                console.log(totalprice);
            } 
        })
        )
        
        div.append(name, img, frnt);
        container.append(div);
}
appendData(storageData);


let model1=document.querySelector(".modal1")
let del=document.querySelector(".del")
let main=document.querySelector(".main")
let head=document.createElement("h3")


del.addEventListener("click",()=>{
    main.classList.remove("show")
});


 model1.addEventListener("click",(e)=>{
   main.classList.add("show")
   head.innerText="Please Enter Contact Number";
})


main.insertAdjacentElement('afterbegin',head)
