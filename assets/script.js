var searchBtnEl = document.getElementById("search-btn"); 
var apiKEY = ""; //to website create login and new apikey 
function searchWeather() {
    var searchText = document.getElementById("citysearch").value; 
    console.log(searchText); 


    //fect request for geolocation to get lon and lat 
    var geoLocationApiURL = "http://api.openweathermap.org/geo/1.0/direct?q="+ searchText +"&limit=1&appid="+ apiKEY; 
    fetch(geoLocationApiURL)
    .then(response =>{

        //fetch api call for weather 
    //var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"
        
    })
    
} 

//Add Event listiner 
searchBtnEl.addEventListener('click', searchWeather); 