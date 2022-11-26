

const click = document.querySelector('button')
const cityname = document.querySelector(".cityname")
const searchess = document.querySelector(".searches")
const tempe = document.querySelector(".temperature")
const akash = document.querySelector(".cloud")
const hawa = document.querySelector(".wind")
const humidity = document.querySelector(".humidity")


click.addEventListener('click',function(){
  //use the plus sign and search bar .(dot/fullstop) value to manifest th value.
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchess.value+'&units=metric&appid=77cd6bcb5e4c5fac124dd4fbaebca809')
  .then(respond => respond.json())
  .then (data => {


    let namvalue = data['name']
    let tapmanvalue = data['main'] ['temp']
    let badal = data['weather'][0]['description']
    let hawavalue = data['wind']['speed']
    let humidityvalue = data['main'] ['humidity']
    



    cityname.innerHTML = namvalue;
    tempe.innerHTML = tapmanvalue + '˚C';
    akash.innerHTML = badal;
    hawa.innerHTML = 'wind'+' '+ hawavalue + 'km/h';
    humidity.innerHTML = 'humidity'+' ' + humidityvalue + '%';
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + namvalue +"')"


  


  })
  


})
