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

                    document.getElementById("day1Temp").textContent ="Temperature: "+ day1Temp+" F";
                    document.getElementById("day1Wind").textContent ="Wind: "+ day1Wind_Speed;
                    document.getElementById("day1Humidity").textContent ="Humidity: "+ day1Humidity;
                  
                    var day2Temp = data.daily[1].temp.day; 
                    console.log(day2Temp); 
                    var day2Wind_Speed = data.daily[1].wind_speed; 
                    console.log(day2Wind_Speed); 
                    var day2Humidity = data.daily[1].humidity; 
                    console.log(day2Humidity); 

                    document.getElementById("day2Temp").textContent ="Temperature: "+ day2Temp+" F";
                    document.getElementById("day2Wind").textContent ="Wind: "+ day2Wind_Speed;
                    document.getElementById("day2Humidity").textContent ="Humidity: "+ day2Humidity;

                    var day3Temp = data.daily[2].temp.day; 
                    console.log(day3Temp); 
                    var day3Wind_Speed = data.daily[2].wind_speed; 
                    console.log(day3Wind_Speed); 
                    var day3Humidity = data.daily[2].humidity; 
                    console.log(day3Humidity); 

                    document.getElementById("day3Temp").textContent ="Temperature: "+ day3Temp+" F";
                    document.getElementById("day3Wind").textContent ="Wind: "+ day3Wind_Speed;
                    document.getElementById("day3Humidity").textContent ="Humidity: "+ day3Humidity;

                    var day4Temp = data.daily[3].temp.day; 
                    console.log(day4Temp); 
                    var day4Wind_Speed = data.daily[3].wind_speed; 
                    console.log(day4Wind_Speed); 
                    var day4Humidity = data.daily[3].humidity; 
                    console.log(day4Humidity); 

                    document.getElementById("day4Temp").textContent ="Temperature: "+ day4Temp+" F";
                    document.getElementById("day4Wind").textContent ="Wind: "+ day4Wind_Speed;
                    document.getElementById("day4Humidity").textContent ="Humidity: "+ day4Humidity;

                    var day5Temp = data.daily[4].temp.day; 
                    console.log(day5Temp); 
                    var day5Wind_Speed = data.daily[4].wind_speed; 
                    console.log(day5Wind_Speed); 
                    var day5Humidity = data.daily[4].humidity; 
                    console.log(day5Humidity); 

                    document.getElementById("day5Temp").textContent ="Temperature: "+ day5Temp+" F";
                    document.getElementById("day5Wind").textContent ="Wind: "+ day5Wind_Speed;
                    document.getElementById("day5Humidity").textContent ="Humidity: "+ day5Humidity;
                });
        });



}

//Add Event listener 
searchBtnEl.addEventListener('click', searchWeather);