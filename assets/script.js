var searchBtnEl = document.getElementById("search-btn");
var APIKEY = "d6b6ee9be9295ca709e6e7634e6337a8";

function searchWeather() {
    var searchText = document.getElementById("citysearch").value;
    console.log(searchText);


    //fect request for geolocation to get lon and lat 
    var geoLocationApiURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchText + "&limit=1&appid=" + APIKEY;
    console.log(geoLocationApiURL);

    fetch(geoLocationApiURL)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("geo location data", data);

            //grabbing lat and lon from the API 
            var lat = data[0].lat;
            var lon = data[0].lon;
            //fetch api call for weather 
            var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&units=imperial&appid=" + APIKEY

            fetch(oneCallURL)
                .then(response => response.json())
                .then(data => {
                    console.log("ONE CALL API DATA", data)

                    //GRAB THE HTML OBJECT AND DISPLAY DATA FROM THE API RESPONSE 
                    document.getElementById("currentCityTemp").textContent ="Temperature: "+ data.current.temp+" F";
                    document.getElementById("currentCityWind").textContent ="Wind: "+ data.current.wind_speed;
                    document.getElementById("currentCityHumidity").textContent ="Humidity: "+ data.current.humidity;
                    document.getElementById("currentCityUVI").textContent ="UV Index: "+ data.current.uvi;

                 
                    var day1Temp = data.daily[0].temp.day; 
                    console.log(day1Temp); 
                    var day1Wind_Speed = data.daily[0].wind_speed; 
                    console.log(day1Wind_Speed); 
                    var day1Humidity = data.daily[0].humidity; 
                    console.log(day1Humidity); 

                    var day2Temp = data.daily[1].temp.day; 
                    console.log(day2Temp); 
                    var day3Temp = data.daily[2].temp.day; 
                    console.log(day3Temp); 
                    var day4Temp = data.daily[3].temp.day; 
                    console.log(day4Temp); 
                    var day5Temp = data.daily[4].temp.day; 
                    console.log(day5Temp); 
                });
        });



}

//Add Event listiner 
searchBtnEl.addEventListener('click', searchWeather);