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
    localStorage.setItem('recent',city)
    document.getElementById("left").textContent = localStorage.getItem('recent')
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
                document.getElementById("1future_date").textContent = "Tomorrow";
                //display weather image
                document.getElementById("1future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("1future_temperature").textContent = "Temperature: " + response.daily[1].temp.day ;
                //display humidity
                document.getElementById("1future_humidity").textContent = "Humidity: " + response.daily[1].humidity;
                //display wind speed
                document.getElementById("1future_windSpeed").textContent = "Wind Speed: " + response.daily[1].wind_speed;
                //display UV Index
                document.getElementById("1future_uvIndex").textContent = "UV Index: " + response.daily[1].uvi;

                //display date
                document.getElementById("2future_date").textContent = "Day 2";
                //display weather image
                document.getElementById("2future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("2future_temperature").textContent = "Temperature: " + response.daily[2].temp.day ;
                //display humidity
                document.getElementById("2future_humidity").textContent = "Humidity: " + response.daily[2].humidity;
                //display wind speed
                document.getElementById("2future_windSpeed").textContent = "Wind Speed: " + response.daily[2].wind_speed;
                //display UV Index
                document.getElementById("2future_uvIndex").textContent = "UV Index: " + response.daily[2].uvi;
                //display date
                document.getElementById("3future_date").textContent = "Day 3";
                //display weather image
                document.getElementById("3future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("3future_temperature").textContent = "Temperature: " + response.daily[3].temp.day ;
                //display humidity
                document.getElementById("3future_humidity").textContent = "Humidity: " + response.daily[3].humidity;
                //display wind speed
                document.getElementById("3future_windSpeed").textContent = "Wind Speed: " + response.daily[3].wind_speed;
                //display UV Index
                document.getElementById("3future_uvIndex").textContent = "UV Index: " + response.daily[3].uvi;

                document.getElementById("4future_date").textContent = "Day 4";
                //display weather image
                document.getElementById("4future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("4future_temperature").textContent = "Temperature: " + response.daily[4].temp.day ;
                //display humidity
                document.getElementById("4future_humidity").textContent = "Humidity: " + response.daily[4].humidity;
                //display wind speed
                document.getElementById("4future_windSpeed").textContent = "Wind Speed: " + response.daily[4].wind_speed;
                //display UV Index
                document.getElementById("4future_uvIndex").textContent = "UV Index: " + response.daily[4].uvi;

                document.getElementById("5future_date").textContent = "Day 5";
                //display weather image
                document.getElementById("5future_image").textContent = "Image: ";
                //display temperature
                document.getElementById("5future_temperature").textContent = "Temperature: " + response.daily[5].temp.day ;
                //display humidity
                document.getElementById("5future_humidity").textContent = "Humidity: " + response.daily[5].humidity;
                //display wind speed
                document.getElementById("5future_windSpeed").textContent = "Wind Speed: " + response.daily[5].wind_speed;
                //display UV Index
                document.getElementById("5future_uvIndex").textContent = "UV Index: " + response.daily[5].uvi;
            });
        return coord
    }
}
