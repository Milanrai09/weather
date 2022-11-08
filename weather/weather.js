
// ;;
//the names in the queryselector are the name from the html 
//class name of the information like temperatur,cloud,etc.

const click = document.querySelector('button')
const cityname = document.querySelector(".cityname")
const searchess = document.querySelector(".searches")
const tempe = document.querySelector(".temperature")
const akash = document.querySelector(".cloud")
const hawa = document.querySelector(".wind")
const humidity = document.querySelector(".humidity")

//button is the search button click is the dom events
click.addEventListener('click',function(){
  //use the plus sign and search bar .(dot/fullstop) value to manifest th value.
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchess.value+'&units=metric&appid=77cd6bcb5e4c5fac124dd4fbaebca809')
  .then(respond => respond.json())
  .then (data => {

    //the name in the brackets are the information from the api json
   //this will fetch only the informatiom that is needed or you need and assign them to the variables

    let namvalue = data['name']
    let tapmanvalue = data['main'] ['temp']
    let badal = data['weather'][0]['description']
    let hawavalue = data['wind']['speed']
    let humidityvalue = data['main'] ['humidity']
    


    //in this the assign information will be menifest to the queryselector which is assign to the div class
    cityname.innerHTML = namvalue;
    tempe.innerHTML = tapmanvalue + '˚C';
    akash.innerHTML = badal;
    hawa.innerHTML = 'wind'+' '+ hawavalue + 'km/h';
    humidity.innerHTML = 'humidity'+' ' + humidityvalue + '%';
    


  


  })
  


})
