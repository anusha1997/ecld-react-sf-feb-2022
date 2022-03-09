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
    var xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=68fd61c35447049dcc6af853dd7c7b80')
    xhr.send()
    xhr.onload = function(){
    
       var response = JSON.parse(this.response)
       console.log(response);
       var temp = response['main']['temp']
       var desc = response['weather'][0]['description']
       var hum = response['main']['humidity']
       var winds = response['wind']['speed']
       var name = response['name']
       var icons = response['weather'][0]['icon']

       descr.innerHTML = desc;
       city.innerHTML = "Weather in " + name
       tempe.innerHTML =  temp + "°C"
       humidity.innerHTML =  "Humidity: " + hum + "%";
       wind.innerHTML =  "Wind speed: " + winds + " km/h"
       icon.src = "https://openweathermap.org/img/wn/" + icons + ".png";
    }
    
}