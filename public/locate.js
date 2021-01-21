const header = document.querySelector('header');
const section = document.querySelector('section');
header.style.backgroundColor = 'pink';
const time2 = Date.now()


    

 function activateData(){
    try{
        if('geolocation' in navigator){
            console.log('geolocation Available');
            navigator.geolocation.getCurrentPosition(async (position) => {
                const time = time2;
                const long = position.coords.longitude;
                const lat = position.coords.latitude;
                let temp;
                console.log(lat,long)
            /*  const airData = `/airQ`;
                const resp = await fetch(airData);
                const airD = await resp.json();
                console.log(airD.results[0].location);
                console.log(airD.results[0].measurements[2].value); */
                const api =`weather/${lat},${long}`;
                const  Res = await fetch(api)
                const tempdata = await Res.json();
                console.log(tempdata.weather)
                console.log(tempdata.air_quality)
                console.log(tempdata.air_quality.results[0].measurements[0].value)

                const cityaq1=tempdata.air_quality.results[0].measurements[0].value
                const cityWeather1 = tempdata.weather.current.feelslike_c;
                const nameCity1 = tempdata.weather.location.name;

                const nameCity = document.createElement('h2');
                const cityWeather = document.createElement('p1');
                const cityaq = document.createElement('h1');      
                            
                nameCity.innerHTML ='City Name: ' + tempdata.weather.location.name;
                cityWeather.innerHTML = "City's Temprature: " + tempdata.weather.current.feelslike_c;
                cityaq.innerHTML ="Air qualiity: " + tempdata.air_quality.results[0].measurements[0].value;

                header.append(nameCity);
                header.append(cityWeather);
                header.append(cityaq);

                const data = {cityaq1 ,cityWeather1, nameCity1 , time ,long, lat};
                
                const options = {
                    method:'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data) 
                }
                const db_response = await fetch('/connect' , options)
                const db_data = await db_response.json();
                console.log(db_data)
            });
        }  else{
            console.log("Buy a new decive")
        }
    } catch (error) {
          console.log("Error with the API")
    }
       
}

document.getElementById('submit').addEventListener('click',activateData);