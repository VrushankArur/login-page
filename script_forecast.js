
    window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) =>
        {
            long = position.coords.longitude;
            lat = position.coords.latitude;    
            var newName = document.getElementById("cityInput");
            var cityName = document.getElementById("cityName");
            
            const api_for = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=d1d21e51ced4e4c1025c29ccd2a1df43`
            fetch(api_for).then((response) => {
                return response.json();
            })
            .then(data => {
                
                //Getting the min and max values for each day
                for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1)+ '<span>&#176</span>C';
                //Number(1.3450001).toFixed(2); // 1.35
            }

            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2)+ '<span>&#176</span>C' ;
            }
            for (i = 0; i < 5; i++) {
                document.getElementById("day" + (i + 1) + "clouds").innerHTML = "clouds: " + data.list.clouds.all.toFixed(2)+ '<span>&#176</span>C';
                //Number(1.3450001).toFixed(2); // 1.35
            }
            //------------------------------------------------------------
            
            //Getting Weather Icons
            //for (i = 0; i < 5; i++) {
            //   document.getElementById("img" + (i + 1)).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
            //}
            //------------------------------------------------------------
            console.log(data)


        
        })
    })

}
  })

//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day) {
    if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
    }
    else {
        return day + d.getDay();
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById("day" + (i + 1)).innerHTML = weekday[CheckDay(i)];
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Cookie", "csrftoken=ZcxFE7vpMXpWSeRzfe3Qmb0VhUlyCTBFV0SF9X0nx0NJ6gqqU4lWRaLa5mFjYMIO");

var urlencoded = new URLSearchParams();
urlencoded.append("request-json", "{\"apikey\": \"pmmhzrmvibvzmbdq\"}");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://nova.astrometry.net/api/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));