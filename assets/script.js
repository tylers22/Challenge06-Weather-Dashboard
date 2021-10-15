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
                    document.getElementById("currentCityTemp").textContent ="Temperature: "+ data.current.temp;
                    var day2Temp = data.daily[1].temp.day; 
                    console.log(day2Temp); 
                    var day1Temp = data.daily[0].temp.day; 
                    console.log(day1Temp); 
                });
        });



}

//Add Event listiner 
searchBtnEl.addEventListener('click', searchWeather);