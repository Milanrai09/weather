// function time(){
//     var dateTime = new Date();
//     var hrs = dateTime.getHours();
//     var min = dateTime.getMinutes();
//     var secs = dateTime.getSeconds();
    

    
//     var hrsvalue = document.querySelector('.hr')
//     var minvalue = document.querySelector('.min')
//     var secvalue = document.querySelector('.sec')
//     var secsvalue = document.querySelector('.am')

   

//     hrsvalue.innerHTML = hrs;
//     minvalue.innerHTML = min;
//     secvalue.innerHTML = secs;
//     secsvalue.innerHTML = ampm;
    
// setInterval(time,1000)
// }

// time()

function time(){
    var dnt = new Date();
    var hrs = dnt.getHours();
    var min = dnt.getMinutes();
    var sec = dnt.getSeconds();
    var ampm = "AM";
    if(hrs >= 12){
        ampm = "PM";
    }
    if( hrs > 12){
        hrs = hrs -12;

    }    

    if (hrs < 10){
        hrs = "0" + hrs;
    }
    if (min < 10){
        min = "0" + min;

    }
    if (sec < 10){
        sec = "0" + sec
    }
    document.getElementById("clock").innerHTML=
     hrs + " " + ":" + " " + min 
    + " " + ":" + " " + sec + " " + ampm;

}
setInterval(time,1000);

