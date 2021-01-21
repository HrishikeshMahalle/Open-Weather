
const express = require('express');
const fetch = require('node-fetch');
const Datastore = require('nedb');
const app = express()
require('dotenv').config()

const apikey =process.env.API_KEY;
const database = new Datastore('database.db')
database.loadDatabase();

console.log(process.env)

app.listen(3100, () => console.log('Live on 3100'));
app.use(express.static('public'))

app.get('/connect',(req,res) => {
    database.find({},(err,data) =>{
        if(err){
            res.end();
            return
        }
        res.json(data);
    })
})

app.use(express.json({ limit : '1mb'}));

app.post('/connect',(req,res) => {
    console.log(req.body)
   
    let data = req.body;
    database.insert(data)
    res.json(data); 
      
})

app.get('/weather/:latlon', async (req,res) => {
    const dataLoc = req.params.latlon.split(',');
    const lat = dataLoc[0];
    const lon = dataLoc[1];
    console.log(lat,lon);
    const api =`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${lon}`;
    const  Res = await fetch(api)
    const tempdata = await Res.json();
    
    const aq_url = `https://api.openaq.org/v1/latest?coordinates=${lat},${lon}`;
    const aq_response = await fetch(aq_url);
    const aq_data = await aq_response.json();
    const data = {
        weather: tempdata,
        air_quality: aq_data 
    }
    res.json(data)
})

/* app.get('/airQ',async (request,response)=>{
    const apiQ = "https://api.openaq.org/v1/latest?coordinates=28.6139391,77.2090212";
    const respn = await fetch(apiQ);
    const airD = await respn.json();
    const aaa = response.json(airD)
    console.log(airD);
}) */
