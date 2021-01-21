const mymap = L.map('mapid').setView([0, 0], 3);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaHJpc2hpeCIsImEiOiJja2o2eWN6b3A2Y2U0MnZwZHJpOGJnMmZkIn0.dnCqq4nJ5grQhNCtKlVcrg'
}).addTo(mymap);

let dispText;



//Retriving the Data
async function retiveData(){
    const response = await fetch('/connect');
    const  data = await response.json();

    for(item of data){
        const Name = item.nameCity1;
        const Weather = item.cityWeather1;
        const Aq = item.cityaq1;

    dispText = "Welcome to " + Name +" city. The temprature in here is " + Weather+ '&deg' + ". And the Airquality here is " + Aq + " Pm";
    const marker = L.marker([item.lat, item.long]).addTo(mymap);
    marker.bindPopup(dispText).openPopup();
    console.log(item.lat,item.long)
   
    }
    console.log(data)
}

retiveData();