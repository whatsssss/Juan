const weather_temp = document.querySelector('.temp');
const weather_place = document.querySelector('.place');
const weather_icon = document.querySelector('.icon');

const API_KEY ="a1770fc6f09f37a0b8ce75b814f238a1";
const COORDS = 'coords'



function getWeather(lat,lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather_temp.innerText =`${temperature} ℃`;
            weather_place.innerText =`${place}`;
            weather_icon.src = 'http://openweathermap.org/img/wn/'+ json.weather[0].icon+ '.png';
        })
}

function saveCoords(coordsObj){
localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
//
function handledGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude ,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handledGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handledGeoSucces,handledGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }
}


function init(){
    loadCoords();
}
init();