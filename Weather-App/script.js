let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "05ffbea85a59fddae3f41bae00a4f9a4";
let searchBox = document.querySelector(".search input");
let searchBut = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function getWeatherData(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        let data = await response.json();

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "./icons/cloudy.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./icons/clear.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "./icons/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "./icons/mist.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./icons/rain.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "./icons/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

searchBut.addEventListener("click", () => {
    getWeatherData(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        getWeatherData(searchBox.value);
    }
});