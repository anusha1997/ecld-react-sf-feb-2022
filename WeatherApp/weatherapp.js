var input = document.querySelector('.inputValue');
var button = document.querySelector('#btn')
var city = document.querySelector('.city')
var descr = document.querySelector('.description')
var tempe = document.querySelector('.temp')
var humidity = document.querySelector('.humidity')
var icon = document.querySelector('.icon')
var wind = document.querySelector('.wind')


window.addEventListener('load',function(){
    var btn = document.getElementById('btn');
    btn.addEventListener('click',getData)
})

function getData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=68fd61c35447049dcc6af853dd7c7b80')
    .then(response => response.json())
    .then(data => {

        var temp = data['main']['temp']
        var desc = data['weather'][0]['description']
        var hum = data['main']['humidity']
        var winds = data['wind']['speed']
        var name = data['name']
        var icons = data['weather'][0]['icon']
 
        descr.innerHTML = desc;
        city.innerHTML = "Weather in " + name
        tempe.innerHTML =  temp + "°C"
        humidity.innerHTML =  "Humidity: " + hum + "%";
        wind.innerHTML =  "Wind speed: " + winds + " km/h"
        icon.src = "https://openweathermap.org/img/wn/" + icons + ".png";
    })
}
