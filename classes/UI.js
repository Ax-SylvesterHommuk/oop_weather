class UI {
    constructor() {
        this.description = document.querySelector(`#description`)
        this.temp = document.querySelector(`#temp`)
        this.city = document.querySelector(`#location`)
        this.windSpeed = document.querySelector(`#windSpeed`)
        this.windDeg = document.querySelector(`#windDeg`)
        this.Humidity = document.querySelector(`#Humidity`)
        this.pressure = document.querySelector(`#pressure`)
        this.visibility = document.querySelector(`#visibility`)
    }
    drawWeather(data) {
        var celcius = Math.round(parseFloat(data.main.temp) -273.15);
        var description = data.weather[0].description;
        let speed = data.wind.speed;
        let deg = data.wind.deg;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let visibility = data.visibility;


        this.description.innerHTML = description;
        this.windSpeed.innerHTML = speed + ` m/s`;
        this.windDeg.innerHTML = deg + `&deg;`;
        this.Humidity.innerHTML = `Humidity ` + humidity + `%`;
        this.pressure.innerHTML = `Pressure ` + pressure + ` psi`;
        this.temp.innerHTML = celcius + `&deg;`;
        this.visibility.innerHTML = `Visibility ` + visibility + ` m`;

        this.city.innerHTML = data.name;
    }
}