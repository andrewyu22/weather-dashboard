var weather = $("#weather-container");
var apiKey = "aa630346e91a6441f826ab5f7a6be4a5";

function click(event) {
    event.preventDefault();
    var city = $("#city").val().trim();
    $("#weather-search").text(city);
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    fetch(apiURL)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    .then(function(data) {
                        console.log(data);
                        displayWeather(data.coord.lon, data.coord.lat);
                        // var weatherEl = document.createElement("h2");
                        // weatherEl.textContent = data.weather[0].main;
                        // weather.append(weatherEl);
                    })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Unable to connect to API ", error);
        })
}

function displayWeather(long, lat) {
    var apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" + apiKey;
    fetch(apiURL)
        .then(function(response) {
            if (response.ok) {
                response.json()
                    .then(function(data) {
                        console.log(data);
                    })
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function(error) {
            alert("Unable to connect to API ", error);
        })
}
$(".btn").on("click", click);