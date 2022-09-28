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
