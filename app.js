let weather = {
    apiKey: "02324e67c797e7a73b513dcd124e1c7b",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units&appid=" + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => console.log (data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather;
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log (name, icon, description, temp, humidity, speed)
        document.querySelector('city').innerText = "Weather in" + name;
        document.querySelector(".icon").ATTRIBUTE_NODE.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        

    }
};