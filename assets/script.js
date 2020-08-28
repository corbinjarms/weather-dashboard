//Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

//Use `localStorage` to store any persistent data.

/*GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
*/

//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

/*WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast*/


//Search best practices
///Did you mean x? with a modal
/// =>
//jquery ui for autocomplete



/*var button = document.getElementById("debounce"); 

const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        console.log("debouncing")
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
                debounceTimer = setTimeout(() => func.apply(context, args), delay) 
    } 
}  

button.addEventListener('input', debounce(function() { 
    alert("Hello\nNo matter how many times you" + 
        "click the debounce button, I get " + 
        "executed once every 3 seconds!!") 
                    }, 1000)); 
                
*/
/*
let city = 'Spokane'

let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=bc0a72d78bf72a19475c2903d0f8d050'

let query = 'q='
let apiKey = '&appid=bc0a72d78bf72a19475c2903d0f8d050'
let lat = "1";
let lon = "1";
console.log
$.ajax({
    url: endpoint,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    document.getElementById("city").textContent = response.name;
    document.getElementById("temperature").textContent = "Temperature: " +  response.main.temp;
    document.getElementById("date").textContent = "Date: " + response.dt;
    document.getElementById("humidity").textContent = "Humidity " + response.main.humidity;
    document.getElementById("image").textContent = "Image: " + response.weather[0].icon;
    document.getElementById("windSpeed").textContent = "Wind speed " + response.wind.speed;
    document.getElementById("uvIndex").textContent = "UV Index" + response.name;
    document.getElementById("conditionality").textContent = "Feels Like: " + response.weather[0].description;
        let lat = response.coord.lat;
        console.log("This is the lat " + lat)
        let lon = response.coord.lon;
        console.log("This is the lon" + lon)
});
*/

//let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=bc0a72d78bf72a19475c2903d0f8d050'
let coord;
let lat;
let lon;
let testEndpoint;
var d = new Date();
var m = new Date();
d = d.getDate();
m = m.getMonth() + 1
function getWeather () {
    
    city = document.getElementById("debounce").value
    let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=bc0a72d78bf72a19475c2903d0f8d050'
    $.ajax({
        url: endpoint,
        success: "GET" }).then(function(response) {
            console.log(response.coord)
            coord = response.coord
            returnData(coord)
        });

    function returnData(coord) {
        lat = coord.lat;
        lon = coord.lon;
        console.log("This yo lat " + lat)
        console.log("This yo lon " + lon)
        testEndpoint = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial'+'&appid='+'bc0a72d78bf72a19475c2903d0f8d050'
        console.log(testEndpoint)
        $.ajax({
            url: testEndpoint,
            success: "GET" }).then(function(response) {
                console.log(response)
                //display city
                document.getElementById("city").textContent = city;
                //display date
                document.getElementById("date").textContent = m + "/"+ d;
                //display weather image
                document.getElementById("image").textContent = "Image: " 
                //display temperature
                document.getElementById("temperature").textContent = "Temperature: " + response.current.temp 
                //display humidity
                document.getElementById("humidity").textContent = "Humidity: " + response.current.humidity 
                //display wind speed
                document.getElementById("windSpeed").textContent = "Wind Speed: " + response.current.wind_speed
                //display UV Index
                document.getElementById("uvIndex").textContent = "UV Index: " + response.current.uvi
                console.log(response)

                //display date
                document.getElementById("future_date").textContent = m + "/"+ d;
                //display weather image
                document.getElementById("future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("future_temperature").textContent = "Temperature: " + response.daily[1].temp.day ;
                //display humidity
                document.getElementById("future_humidity").textContent = "Humidity: " + response.current.humidity ;
                //display wind speed
                document.getElementById("future_windSpeed").textContent = "Wind Speed: " + response.current.wind_speed;
                //display UV Index
                document.getElementById("future_uvIndex").textContent = "UV Index: " + response.current.uvi;
            });
        return coord
    }
}
