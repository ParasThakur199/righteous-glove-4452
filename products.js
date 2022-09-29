let obj = [
    {
        Type: 'Sedan',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvWebsiteVERNA+.png',
        Brand: 'Hyundai',
        Price: 1740,
        Name: 'Hyundai Verna MT',
        Seats: 5,
        Transmission: 'Manual'
    },
    {
        Type: 'Sedan',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/XcentWEBPAGE.png',
        Brand: 'Hyundai',
        Price: 1480,
        Name: 'Hyundai Xcent',
        Seats: 5,
        Transmission: 'Manual'
    },
    {
        Type: 'Hatchback',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/RevvSANTRO.png',
        Brand: 'Hyundai',
        Price: 1220,
        Name: 'Hyundai Santro AT',
        Seats: 5,
        Transmission: 'Automatic'
    },
    {
        Type: 'Hatchback',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/i20.png',
        Brand: 'Hyundai',
        Price: 1540,
        Name: 'Hyundai Elite i20 AT',
        Seats: 5,
        Transmission: 'Automatic'
    },
    {
        Type: 'SUV',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/scorpio.png',
        Brand: 'Mahindra',
        Price: 2040,
        Name: 'Mahindra Scorpio',
        Seats: 7,
        Transmission: 'Manual'
    },
    {
        Type: 'SUV',
        Image: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/Mahindra_XYLO.png',
        Brand: 'Mahindra',
        Price: 1740,
        Name: 'Mahindra Xylo',
        Seats: 7,
        Transmission: 'Manual'
    },
    {
        Type: 'SUV',
        Image: 'https://revvselfdrivecar.s3-us-west-2.amazonaws.com/carImages/white_images/RevvMahindraXUV300.png',
        Brand: 'Mahindra',
        Price: 1740,
        Name: 'Mahindra XUV300 (P)',
        Seats: 5,
        Transmission: 'Manual'
    },
    {
        Type: 'Sedan',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/thumb/CiazWEBPAGE.png',
        Brand: 'Maruti',
        Price: 1920,
        Name: 'Maruti Ciaz',
        Seats: 5,
        Transmission: 'Manual'
    },
    {
        Type: 'Sedan',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/dzire.png',
        Brand: 'Maruti',
        Price: 1420,
        Name: 'Maruti Swift Dzire',
        Seats: 5,
        Transmission: 'Manual'
    },
    {
        Type: 'SUV',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/brezza.png',
        Brand: 'Maruti',
        Price: 1740,
        Name: 'Maruti Brezza AT',
        Seats: 5,
        Transmission: 'Automatic'
    },
    {
        Type: 'Hatchback',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/baleno.png',
        Brand: 'Maruti',
        Price: 1480,
        Name: 'Maruti Brezza AT',
        Seats: 5,
        Transmission: 'Automatic'
    },
    {
        Type: 'Hatchback',
        Image: 'https://s3-us-west-2.amazonaws.com/revvselfdrivecar/carImages/white_images/celerio.png',
        Brand: 'Maruti',
        Price: 1480,
        Name: 'Maruti Celerio',
        Seats: 5,
        Transmission: 'Automatic'
    }
];
let main = document.querySelector('#bodysection');
console.log(obj)
let appendData = (data)=>{
    main.innerHTML = null;
    data.forEach(el => {
        let div = document.createElement('div');
        div.setAttribute('class','singleData');
        let name = document.createElement('h2');
        name.innerText = el.Name;
        let img = document.createElement('img');
        img.setAttribute('src',el.Image);
        let frnt = document.createElement('div');
        frnt.setAttribute('class','front');
        let Trans = document.createElement('p');
        Trans.innerText = el.Transmission;
        let Seats = document.createElement('p');
        Seats.innerText = `${el.Seats} seats `;
        frnt.append(Trans,Seats);
        let secdiv = document.createElement('div');
        secdiv.setAttribute('class','front');
        let price = document.createElement('p');
        price.innerText = `₹ ${el.Price}`;
        let btn = document.createElement('button');
        btn.innerText='Book';
        btn.setAttribute('class','booking');
        secdiv.append(price,btn);
        div.append(name,img,frnt,secdiv);
        main.append(div);
    });
}
appendData(obj);

function lowtohigh(e) {
    // console.log(e.target.value);
    if (e.target.value == 'Low') {
        let lowdata = obj.sort((a, b) => {
            return (a.Price - b.Price);
        });
        appendData(lowdata);
    } else if (e.target.value == 'High') {
        let highdata = obj.sort((a, b) => {
            return (b.Price - a.Price)
        });
        appendData(highdata);
    } else {
        appendData(obj);
    }

}


const filterdata = (() => {
    let Hatch = document.querySelector('#Hatchback').checked;
    let Sedan = document.querySelector('#Sedan').checked;
    let SUV = document.querySelector('#SUV').checked;
    if (Hatch == true) {
        let datta = document.querySelector('#Hatchback').name;
        let res = obj.filter((el) => {
            if (el.Type == datta) {
                return (datta);
            }
        })
        appendData(res);
    }
    if (SUV == true) {
        let datta = document.querySelector('#SUV').name;
        let res = obj.filter((el) => {
            if (el.Type == datta) {
                return (datta);
            }
        })
        appendData(res);
    }
    if (Sedan == true) {
        let datta = document.querySelector('#Sedan').name;
        let res = obj.filter((el) => {
            if (el.Type == datta) {
                return (datta);
            }
        })
        appendData(res);
    }
});

const filterbrand = ()=>{
    let Maruti = document.querySelector('#Maruti').checked;
    let Hyundai = document.querySelector('#Hyundai').checked;
    let Toyota = document.querySelector('#Toyota').checked;
    let Mahindra = document.querySelector('#Mahindra').checked;

    if(Maruti==true){
        let data1 = document.querySelector('#Maruti').name;
        let res = obj.filter((el)=>{
            if(el.Brand==data1){
                return data1;
            }
        })
        appendData(res);
    }

    if(Hyundai==true){
        let data1 = document.querySelector('#Hyundai').name;
        let res = obj.filter((el)=>{
            if(el.Brand==data1){
                return data1;
            }
        });
        appendData(res);
    }

    if(Toyota==true){
        let data1 = document.querySelector('#Toyota').name;
        let res = obj.filter((el)=>{
            if(el.Brand==data1){
                return data1;
            }
        });
        appendData(res);
    }

    if(Mahindra==true){
        let data1 = document.querySelector('#Mahindra').name;
        let res = obj.filter((el)=>{
            if(el.Brand==data1){
                return data1;
            }
        });
        appendData(res);
    }

}
const filtertype=(()=>{
    let Automatic = document.querySelector('#Automatic').checked;
    let Manual = document.querySelector('#Manual').checked;

    if(Automatic==true){
        let data2 = document.querySelector('#Automatic').name;
        let res = obj.filter((el)=>{
            if(el.Transmission==data2){
                return data2
            }
        })
        appendData(res);
    }

    if(Manual==true){
        let data2 = document.querySelector('#Manual').name;
        let res = obj.filter((el)=>{
            if(el.Transmission==data2){
                return true;
            }
        });
        appendData(res);
    }
}); 

const filterseats=(()=>{
    let seatsless = document.querySelector('#seatsless').checked;
    let seatshigh = document.querySelector('#seatshigh').checked;

    if(seatsless==true){
        let data3 = document.querySelector('#seatsless').name;
        let res = obj.filter((el)=>{
            if(el.Seats==5){
                return el.Seats
            }
        });
        appendData(res);
    }

    if(seatshigh==true){
        let data3 = document.querySelector('#seatshigh').name;
        let res = obj.filter((el)=>{
            if(el.Seats==7){
                return el.Seats;
            }
        });
        appendData(res);
    }
});
